#!/usr/bin/env bash
set -euo pipefail

# Release script for @dfosco/storyboard-* packages
# Runs lint + tests + build before creating a versioned release.
# Usage: ./scripts/release.sh

echo "🔍 Running lint..."
npm run lint

echo "🧪 Running tests..."
npm test

echo "🏗️  Running build..."
npm run build

echo "📝 Creating changeset..."
npx changeset

echo "📦 Bumping versions..."
npx changeset version

echo "📌 Committing version bump..."
git add -A
git commit -m "chore: version packages"

echo "🚀 Publishing to npm..."
npx changeset publish

echo "⬆️  Pushing with tags..."
git push --follow-tags

echo "✅ Release complete!"
