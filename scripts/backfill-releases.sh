#!/usr/bin/env bash
set -euo pipefail

# Backfill GitHub Releases for all @dfosco/storyboard-core@* tags
# that don't have a corresponding GitHub Release yet.
#
# Dry-run by default. Pass --execute to actually create releases.
#
# Usage:
#   ./scripts/backfill-releases.sh            # dry-run
#   ./scripts/backfill-releases.sh --execute   # create releases

EXECUTE=false
if [[ "${1:-}" == "--execute" ]]; then
  EXECUTE=true
fi

CHANGELOG="packages/core/CHANGELOG.md"

for tag in $(git tag --sort=v:refname | grep '@dfosco/storyboard-core@'); do
  VERSION="${tag##*@}"
  TITLE="v${VERSION}"

  # Skip if release already exists for this tag
  if gh release view "$tag" &>/dev/null; then
    echo "⏭️  ${TITLE} — release exists, skipping"
    continue
  fi

  # Extract changelog section for this version
  NOTES=$(awk -v ver="## ${VERSION}" '
    $0 ~ ver { found=1; next }
    found && /^## / { exit }
    found { print }
  ' "$CHANGELOG")

  # Get the tag date for the release timestamp
  TAG_DATE=$(git --no-pager log -1 --format=%aI "$tag" 2>/dev/null || echo "")

  if [[ "$EXECUTE" == true ]]; then
    if [[ -n "$NOTES" ]]; then
      echo "$NOTES" | gh release create "$tag" --title "$TITLE" --notes-file -
    else
      gh release create "$tag" --title "$TITLE" --generate-notes
    fi
    echo "✅ Created ${TITLE}"
  else
    echo "🔍 Would create: ${TITLE} (tag: ${tag})"
    if [[ -n "$NOTES" ]]; then
      echo "   Notes: $(echo "$NOTES" | head -3 | tr '\n' ' ')..."
    else
      echo "   Notes: (auto-generated from commits)"
    fi
  fi
done

if [[ "$EXECUTE" == false ]]; then
  echo ""
  echo "Dry run complete. Run with --execute to create releases."
fi
