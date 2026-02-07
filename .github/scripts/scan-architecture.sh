#!/usr/bin/env bash
#
# scan-architecture.sh
#
# Scans the repository for architecturally significant files and outputs:
#   1. A JSON manifest of files to document (to stdout)
#   2. Generates the architecture index file
#
# Usage: .github/scripts/scan-architecture.sh [--manifest | --index]
#   --manifest  Print JSON array of { path, category, importance } for each file
#   --index     Generate .github/architecture/architecture.index.md from existing docs

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
ARCH_DIR="$REPO_ROOT/.github/architecture"

# Files/patterns considered architecturally significant, in priority order.
# Format: category|glob_pattern|importance
PATTERNS=(
  # Entry points & config
  "config|vite.config.js|high"
  "config|eslint.config.js|medium"
  "config|package.json|high"
  "entry|src/index.jsx|medium"
  "entry|index.html|medium"

  # App shell & routing
  "routing|src/pages/_app.jsx|high"

  # Templates
  "template|src/templates/*/[A-Z]*.jsx|medium"

  # Storyboard core
  "storyboard|src/storyboard/index.js|high"
  "storyboard|src/storyboard/context.jsx|high"
  "storyboard|src/storyboard/StoryboardContext.js|high"
  "storyboard|src/storyboard/core/loader.js|high"
  "storyboard|src/storyboard/core/dotPath.js|high"
  "storyboard|src/storyboard/hooks/*.js|high"

  # Storyboard components
  "storyboard|src/storyboard/components/[A-Z]*.jsx|high"

  # Shared components
  "component|src/components/[A-Z]*.jsx|medium"

  # Page routes (document pattern, not every page)
  "page|src/pages/index.jsx|medium"

  # Data files (document pattern)
  "data|src/data/scenes/default.json|medium"
  "data|src/data/objects/navigation.json|low"

  # Global styles
  "style|src/globals.css|low"
  "style|src/reset.css|low"
)

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
  --manifest)
    print_manifest
    ;;
  --index)
    generate_index
    ;;
  *)
    echo "Usage: $0 [--manifest | --index]"
    echo "  --manifest  Print JSON manifest of files to document"
    echo "  --index     Generate architecture index from existing docs"
    exit 1
    ;;
esac
