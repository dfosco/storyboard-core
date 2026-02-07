# Architecture Scanner Skill

> Triggered by: "scan the codebase architecture", "update the architecture", "update arch", "generate architecture docs", "scan arch"

## What This Does

Generates documentation files in `.github/architecture/` that describe every architecturally significant file in the codebase. Each file gets a `filename.ext.md` doc explaining its composition and goal. An `architecture.index.md` links everything together.

## How to Execute

### Step 1: Discover files

```bash
.github/scripts/scan-architecture.sh --discover
```

This scans the repo using discovery rules and updates the `PATTERNS` list inside the script itself. Run this first to ensure the file list is current.

### Step 2: Get the manifest

```bash
.github/scripts/scan-architecture.sh --manifest
```

This outputs a JSON array of files to document, with their category and importance level. Use this as the authoritative list — do NOT manually pick files.

### Step 3: Generate documentation for each file

For each entry in the manifest, create (or update) a markdown file at:

```
.github/architecture/{filename.ext}.md
```

Where `{filename.ext}` is the basename of the source file (e.g., `loader.js.md`, `Application.jsx.md`).

**If two files share a basename**, prefix with the parent directory: `core.loader.js.md`, `hooks.useSceneData.js.md`.

Each doc file MUST follow this template:

```markdown
# `{filepath}`

<!--
source: {filepath}
category: {category}
importance: {importance}
-->

> [← Architecture Index](./architecture.index.md)

## Goal

{1-2 sentence summary of what this file does and why it exists}

## Composition

{Description of the file's structure: what it exports, key functions/components, internal organization}

## Dependencies

{List of significant imports — what this file depends on}

## Dependents

{What depends on this file — who imports it}

## Notes

{Any non-obvious behavior, edge cases, or architectural decisions worth noting. Omit this section if there's nothing notable.}
```

**Rules for writing docs:**
- Read each file's actual content before writing its doc — do NOT guess
- Keep descriptions factual and concise (not aspirational)
- The "Dependents" section should be derived by grepping for imports of this file
- For `low` importance files, keep docs brief (Goal + Composition only, skip Notes)
- For `high` importance files, be thorough

### Step 4: Generate the index

```bash
.github/scripts/scan-architecture.sh --index
```

This reads the generated doc files and creates `architecture.index.md` with a categorized table of contents.

### Step 5: Verify

- Confirm every file in the manifest has a corresponding `.md` doc
- Confirm `architecture.index.md` links to all docs
- Confirm every doc has a backlink to the index

### Step 6: Commit

```bash
git add .github/architecture/ .github/scripts/scan-architecture.sh
git commit -m "Update architecture documentation"
```
