---
"@dfosco/storyboard-core": patch
---

Add body class sync: mirrors active overrides as `sb-{key}--{value}` and scene as `sb-scene--{name}` CSS classes on `<body>`. Classes update reactively on hash/storage changes and scene switches. Use `:global(.sb-theme--dark)` in CSS Modules to conditionally style components based on storyboard state.
