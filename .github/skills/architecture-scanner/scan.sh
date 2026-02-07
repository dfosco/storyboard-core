#!/usr/bin/env bash
#
# scan.sh — Architecture scanner
#
# Scans the repository for architecturally significant files, maintains
# a files.json index, and generates architecture documentation index.
#
# Usage: .github/skills/architecture-scanner/scan.sh [--discover | --manifest | --stale | --index]
#   --discover  Scan repo, create/update files.json (preserves user-set priorities)
#   --manifest  Print JSON array of non-low files to document
#   --stale     Print manifest of files needing doc updates (missing or stale)
#   --index     Generate .github/architecture/architecture.index.md from existing docs

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
ARCH_DIR="$REPO_ROOT/.github/architecture"
SKILL_DIR="$REPO_ROOT/.github/skills/architecture-scanner"
FILES_JSON="$SKILL_DIR/files.json"

# ── Discovery rules ──────────────────────────────────────────
# Maps glob patterns to category|default_importance.
# Globs are evaluated relative to REPO_ROOT.
# Order matters: first match wins for a given file.
DISCOVERY_RULES=(
  # Config files at root
  "config|high|vite.config.js"
  "config|low|eslint.config.js"
  "config|high|package.json"

  # Entry points
  "entry|high|src/index.jsx"
  "entry|low|index.html"

  # App shell
  "routing|high|src/pages/_app.jsx"

  # Templates (capitalized JSX in templates/)
  "template|low|src/templates/*/[A-Z]*.jsx"

  # Storyboard barrel
  "storyboard|medium|src/storyboard/index.js"

  # Storyboard context
  "storyboard|high|src/storyboard/context.jsx"
  "storyboard|high|src/storyboard/StoryboardContext.js"

  # Storyboard core modules
  "storyboard|high|src/storyboard/core/loader.js"
  "storyboard|high|src/storyboard/core/*.js"

  # Storyboard hooks
  "storyboard|high|src/storyboard/hooks/*.js"

  # Storyboard components
  "storyboard|high|src/storyboard/components/[A-Z]*.jsx"

  # Shared components
  "component|low|src/components/[A-Z]*.jsx"

  # Page routes
  "page|low|src/pages/[A-Z]*.jsx"
  "page|medium|src/pages/index.jsx"

  # Data scenes
  "data|high|src/data/scenes/*.json"
  "data|high|src/data/scenes/*.jsonc"

  # Data objects
  "data|low|src/data/objects/*.json"
  "data|low|src/data/objects/*.jsonc"

  # Global styles
  "style|low|src/globals.css"
  "style|low|src/reset.css"
)

# ── Helpers ──────────────────────────────────────────────────

# Read existing importance for a path from files.json, or return empty string
get_existing_importance() {
  local filepath="$1"
  if [ -f "$FILES_JSON" ]; then
    # Use python3 for reliable JSON parsing
    python3 -c "
import json, sys
with open('$FILES_JSON') as f:
    data = json.load(f)
for entry in data:
    if entry['path'] == '$filepath':
        print(entry.get('importance', ''))
        sys.exit(0)
print('')
" 2>/dev/null
  fi
}

discover_files() {
  # Collect discovered files
  declare -A seen
  declare -A discovered_cat
  declare -A discovered_imp
  local ordered_paths=()

  for rule in "${DISCOVERY_RULES[@]}"; do
    IFS='|' read -r category importance glob_pattern <<< "$rule"
    for file in $REPO_ROOT/$glob_pattern; do
      [ -f "$file" ] || continue
      local relpath="${file#$REPO_ROOT/}"
      if [[ -n "${seen[$relpath]+x}" ]]; then
        continue
      fi
      seen[$relpath]=1
      discovered_cat[$relpath]="$category"
      discovered_imp[$relpath]="$importance"
      ordered_paths+=("$relpath")
    done
  done

  # Build new files.json, preserving existing importance values
  local tmp_json
  tmp_json="$(mktemp)"
  echo "[" > "$tmp_json"

  local first=true
  for relpath in "${ordered_paths[@]}"; do
    local category="${discovered_cat[$relpath]}"
    local default_importance="${discovered_imp[$relpath]}"

    # Preserve user-set importance if file already exists in files.json
    local existing_importance
    existing_importance="$(get_existing_importance "$relpath")"
    local importance="${existing_importance:-$default_importance}"

    if [ "$first" = true ]; then
      first=false
    else
      echo "," >> "$tmp_json"
    fi
    printf '  { "path": "%s", "category": "%s", "importance": "%s" }' \
      "$relpath" "$category" "$importance" >> "$tmp_json"
  done

  echo "" >> "$tmp_json"
  echo "]" >> "$tmp_json"

  mkdir -p "$SKILL_DIR"
  mv "$tmp_json" "$FILES_JSON"

  # Report what was found
  echo "Discovered ${#ordered_paths[@]} files. Index updated:"
  echo "  $FILES_JSON"
  echo ""
  echo "Files:"
  for relpath in "${ordered_paths[@]}"; do
    local category="${discovered_cat[$relpath]}"
    local existing_importance
    existing_importance="$(get_existing_importance "$relpath")"
    local importance="$existing_importance"
    printf "  %-12s %-6s %s\n" "[$category]" "$importance" "$relpath"
  done
}

print_manifest() {
  if [ ! -f "$FILES_JSON" ]; then
    echo "files.json not found. Run --discover first." >&2
    exit 1
  fi
  python3 -c "
import json
with open('$FILES_JSON') as f:
    data = json.load(f)
out = [e for e in data if e.get('importance') != 'low']
for e in out:
    e['doc'] = e['path'] + '.md'
print(json.dumps(out, indent=2))
"
}

print_stale() {
  if [ ! -f "$FILES_JSON" ]; then
    echo "files.json not found. Run --discover first." >&2
    exit 1
  fi
  python3 -c "
import json, os

files_json = '$FILES_JSON'
arch_dir = '$ARCH_DIR'
repo_root = '$REPO_ROOT'

with open(files_json) as f:
    data = json.load(f)

results = []
for entry in data:
    if entry.get('importance') == 'low':
        continue
    src = os.path.join(repo_root, entry['path'])
    doc = os.path.join(arch_dir, entry['path'] + '.md')
    if not os.path.isfile(src):
        continue
    status = None
    if not os.path.isfile(doc):
        status = 'missing'
    else:
        if os.path.getmtime(src) > os.path.getmtime(doc):
            status = 'stale'
    if status:
        results.append({**entry, 'doc': entry['path'] + '.md', 'status': status})

print(json.dumps(results, indent=2))
"
}

generate_index() {
  mkdir -p "$ARCH_DIR"
  local index_file="$ARCH_DIR/architecture.index.md"

  # Category display names (order matters)
  local CATEGORY_ORDER=(config entry routing template storyboard component page data style)
  declare -A CATEGORY_NAMES=(
    [config]="Configuration"
    [entry]="Entry Points"
    [routing]="Routing"
    [template]="Templates"
    [storyboard]="Storyboard System"
    [component]="Shared Components"
    [page]="Pages"
    [data]="Data Files"
    [style]="Global Styles"
  )

  cat > "$index_file" << 'HEADER'
# Architecture Index

> Auto-generated documentation of architecturally significant files.
> Run `scan the codebase architecture` to regenerate.

HEADER

  echo "## Table of Contents" >> "$index_file"
  echo "" >> "$index_file"

  for cat in "${CATEGORY_ORDER[@]}"; do
    local has_files=false
    while IFS= read -r doc; do
      [ -f "$doc" ] || continue
      [[ "$doc" == */architecture.index.md ]] && continue
      if grep -q "^category: $cat" "$doc" 2>/dev/null; then
        if [ "$has_files" = false ]; then
          echo "### ${CATEGORY_NAMES[$cat]}" >> "$index_file"
          echo "" >> "$index_file"
          has_files=true
        fi
        local relpath="${doc#$ARCH_DIR/}"
        local title="$(head -1 "$doc" | sed 's/^# //')"
        echo "- [$title](./$relpath)" >> "$index_file"
      fi
    done < <(find "$ARCH_DIR" -name "*.md" -not -name "architecture.index.md" | sort)
    if [ "$has_files" = true ]; then
      echo "" >> "$index_file"
    fi
  done

  echo "Generated: $index_file"
}

case "${1:-}" in
  --discover)
    discover_files
    ;;
  --manifest)
    print_manifest
    ;;
  --stale)
    print_stale
    ;;
  --index)
    generate_index
    ;;
  *)
    echo "Usage: $0 [--discover | --manifest | --stale | --index]"
    echo "  --discover  Scan repo and create/update files.json (preserves priorities)"
    echo "  --manifest  Print JSON manifest of non-low files to document"
    echo "  --stale     Print manifest of files needing doc updates (missing or stale)"
    echo "  --index     Generate architecture index from existing docs"
    exit 1
    ;;
esac
