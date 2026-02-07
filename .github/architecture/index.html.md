# `index.html`

<!--
source: index.html
category: entry
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

HTML entry point for the Vite-powered SPA; mounts the React app and handles GitHub Pages SPA redirect workaround.

## Composition

- Sets page title to "Primer React Prototype"
- Favicon: `/favicon.svg`
- Contains an inline script from [spa-github-pages](https://github.com/rafgraph/spa-github-pages) that converts redirect query strings back into proper URLs for client-side routing on GitHub Pages
- Renders into `<div id="root">`
- Loads `/src/index.jsx` as an ES module

## Dependencies

- `/src/index.jsx` — application entry module
- `/favicon.svg` — site icon

## Dependents

Vite uses this as the HTML entry point (configured by convention).

## Notes

The SPA redirect script is critical for GitHub Pages deployment — without it, deep-linked routes return 404s.
