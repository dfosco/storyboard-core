#!/usr/bin/env bash
#
# scan-architecture.sh
#
# Scans the repository for architecturally significant files and outputs:
#   1. A JSON manifest of files to document (to stdout)
#   2. Generates the architecture index file
#   3. Auto-discovers files and updates the PATTERNS list in this script
#
# Usage: .github/scripts/scan-architecture.sh [--discover | --manifest | --index]
#   --discover  Scan repo and update the PATTERNS list in this script
#   --manifest  Print JSON array of { path, category, importance } for each file
#   --index     Generate .github/architecture/architecture.index.md from existing docs

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
ARCH_DIR="$REPO_ROOT/.github/architecture"
SELF="$REPO_ROOT/.github/scripts/scan-architecture.sh"

# ┌──────────────────────────────────────────────────────────┐
# │ PATTERNS — auto-updated by --discover. Do not hand-edit. │
# └──────────────────────────────────────────────────────────┘
# BEGIN_PATTERNS
PATTERNS=(
  # Entry points & config
  "config|vite.config.js|high"
  "config|eslint.config.js|medium"
  "config|package.json|medium"

  # Entry points
  "entry|src/index.jsx|high"
  "entry|index.html|medium"

  # App shell & routing
  "routing|src/pages/_app.jsx|high"

  # Templates
  "template|src/templates/Application/Application.jsx|high"

  # Storyboard
  "storyboard|src/storyboard/index.js|high"
  "storyboard|src/storyboard/context.jsx|high"
  "storyboard|src/storyboard/StoryboardContext.js|medium"
  "storyboard|src/storyboard/core/loader.js|high"
  "storyboard|src/storyboard/core/dotPath.js|medium"
  "storyboard|src/storyboard/hooks/useSceneData.js|high"
  "storyboard|src/storyboard/components/SceneDataDemo.jsx|medium"
  "storyboard|src/storyboard/components/SceneDebug.jsx|medium"

  # Shared components
  "component|src/components/ColorModeSwitcher.jsx|medium"
  "component|src/components/GlobalNavigation.jsx|medium"
  "component|src/components/Playground.jsx|medium"
  "component|src/components/SidebarNavigation.jsx|medium"

  # Page routes
  "page|src/pages/Issues.jsx|medium"
  "page|src/pages/Overview.jsx|medium"
  "page|src/pages/index.jsx|medium"

  # Data files
  "data|src/data/scenes/default.json|medium"
  "data|src/data/scenes/other-scene.json|medium"
  "data|src/data/objects/jane-doe.json|low"
  "data|src/data/objects/navigation.json|low"

  # Global styles
  "style|src/globals.css|low"
  "style|src/reset.css|low"
)
# END_PATTERNS

# ── Discovery rules ──────────────────────────────────────────
# Maps directory patterns to category|importance.
# Globs are evaluated relative to REPO_ROOT.
# Order matters: first match wins for a given file.
DISCOVERY_RULES=(
  # Config files at root
  "config|high|vite.config.js"
  "config|medium|eslint.config.js"
  "config|medium|package.json"

  # Entry points
  "entry|high|src/index.jsx"
  "entry|medium|index.html"

  # App shell
  "routing|high|src/pages/_app.jsx"

  # Templates (capitalized JSX in templates/)
  "template|high|src/templates/*/[A-Z]*.jsx"

  # Storyboard barrel
  "storyboard|high|src/storyboard/index.js"

  # Storyboard context
  "storyboard|high|src/storyboard/context.jsx"
  "storyboard|medium|src/storyboard/StoryboardContext.js"

  # Storyboard core modules
  "storyboard|high|src/storyboard/core/loader.js"
  "storyboard|medium|src/storyboard/core/*.js"

  # Storyboard hooks
  "storyboard|high|src/storyboard/hooks/*.js"

  # Storyboard components
  "storyboard|medium|src/storyboard/components/[A-Z]*.jsx"

  # Shared components
  "component|medium|src/components/[A-Z]*.jsx"

  # Page routes
  "page|medium|src/pages/[A-Z]*.jsx"
  "page|medium|src/pages/index.jsx"

  # Data scenes
  "data|medium|src/data/scenes/*.json"
  "data|medium|src/data/scenes/*.jsonc"

  # Data objects
  "data|low|src/data/objects/*.json"
  "data|low|src/data/objects/*.jsonc"

  # Global styles
  "style|low|src/globals.css"
  "style|low|src/reset.css"
)

discover_files() {
  # Collect unique file entries: seen tracks "category|file" to avoid dupes
  declare -A seen
  local entries=()

  for rule in "${DISCOVERY_RULES[@]}"; do
    IFS='|' read -r category importance glob_pattern <<< "$rule"
    for file in $REPO_ROOT/$glob_pattern; do
      [ -f "$file" ] || continue
      local relpath="${file#$REPO_ROOT/}"
      local key="$relpath"
      if [[ -n "${seen[$key]+x}" ]]; then
        continue
      fi
      seen[$key]=1
      entries+=("$category|$relpath|$importance")
    done
  done

  # Build the new PATTERNS block into a temp file
  local block_file
  block_file="$(mktemp)"

  echo "# BEGIN_PATTERNS" >> "$block_file"
  echo "PATTERNS=(" >> "$block_file"

  local current_cat=""
  for entry in "${entries[@]}"; do
    IFS='|' read -r category file importance <<< "$entry"
    if [[ "$category" != "$current_cat" ]]; then
      [[ -n "$current_cat" ]] && echo "" >> "$block_file"
      case "$category" in
        config)     echo "  # Entry points & config" >> "$block_file" ;;
        entry)      echo "  # Entry points" >> "$block_file" ;;
        routing)    echo "  # App shell & routing" >> "$block_file" ;;
        template)   echo "  # Templates" >> "$block_file" ;;
        storyboard) echo "  # Storyboard" >> "$block_file" ;;
        component)  echo "  # Shared components" >> "$block_file" ;;
        page)       echo "  # Page routes" >> "$block_file" ;;
        data)       echo "  # Data files" >> "$block_file" ;;
        style)      echo "  # Global styles" >> "$block_file" ;;
        *)          echo "  # $category" >> "$block_file" ;;
      esac
      current_cat="$category"
    fi
    echo "  \"$category|$file|$importance\"" >> "$block_file"
  done

  echo ")" >> "$block_file"
  echo "# END_PATTERNS" >> "$block_file"

  # Replace the PATTERNS block in this script using the temp file
  local tmpout
  tmpout="$(mktemp)"

  # Write everything before BEGIN_PATTERNS, then the new block, then everything after END_PATTERNS
  sed -n '1,/^# BEGIN_PATTERNS/{ /^# BEGIN_PATTERNS/!p; }' "$SELF" > "$tmpout"
  cat "$block_file" >> "$tmpout"
  sed -n '/^# END_PATTERNS/,$ { /^# END_PATTERNS/!p; }' "$SELF" >> "$tmpout"

  mv "$tmpout" "$SELF"
  chmod +x "$SELF"
  rm -f "$block_file"

  # Report what was found
  echo "Discovered ${#entries[@]} files. PATTERNS updated in:"
  echo "  $SELF"
  echo ""
  echo "Files:"
  for entry in "${entries[@]}"; do
    IFS='|' read -r category file importance <<< "$entry"
    printf "  %-12s %-6s %s\n" "[$category]" "$importance" "$file"
  done
}

print_manifest() {
  echo "["
  local first=true
  for entry in "${PATTERNS[@]}"; do
    IFS='|' read -r category pattern importance <<< "$entry"
    # Expand glob (relative to repo root)
    for file in $REPO_ROOT/$pattern; do
      [ -f "$file" ] || continue
      local relpath="${file#$REPO_ROOT/}"
      if [ "$first" = true ]; then
        first=false
      else
        echo ","
      fi
      printf '  { "path": "%s", "category": "%s", "importance": "%s" }' \
        "$relpath" "$category" "$importance"
    done
  done
  echo ""
  echo "]"
}

generate_index() {
  local index_file="$ARCH_DIR/architecture.index.md"
  local current_category=""

  # Category display names
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

  # Category order
  local CATEGORY_ORDER=(config entry routing template storyboard component page data style)

  cat > "$index_file" << 'HEADER'
# Architecture Index

> Auto-generated documentation of architecturally significant files.
> Run `scan the codebase architecture` to regenerate.

HEADER

  # Build ToC
  echo "## Table of Contents" >> "$index_file"
  echo "" >> "$index_file"

  for cat in "${CATEGORY_ORDER[@]}"; do
    local has_files=false
    for doc in "$ARCH_DIR"/*.md; do
      [ -f "$doc" ] || continue
      [ "$(basename "$doc")" = "architecture.index.md" ] && continue
      if grep -q "^category: $cat" "$doc" 2>/dev/null; then
        if [ "$has_files" = false ]; then
          echo "### ${CATEGORY_NAMES[$cat]}" >> "$index_file"
          echo "" >> "$index_file"
          has_files=true
        fi
        local basename_doc="$(basename "$doc")"
        local title="$(head -1 "$doc" | sed 's/^# //')"
        echo "- [$title](./$basename_doc)" >> "$index_file"
      fi
    done
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
  --index)
    generate_index
    ;;
  *)
    echo "Usage: $0 [--discover | --manifest | --index]"
    echo "  --discover  Scan repo and update the PATTERNS list in this script"
    echo "  --manifest  Print JSON manifest of files to document"
    echo "  --index     Generate architecture index from existing docs"
    exit 1
    ;;
esac
