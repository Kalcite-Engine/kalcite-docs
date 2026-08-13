---
title: Editor integrations
---

The source includes a VS Code extension with syntax configuration, bracket/comment rules, and snippets; a Zed extension using a Tree-sitter grammar; and a language-server crate. The VS Code extension is a **Current syntax integration**: install the CLI in `PATH`, then run `kalcite lint`, `kalcite check`, or `kalcite build` in its integrated terminal.

![Kalcite VS Code extension preview based on the extension's syntax grammar and snippets.](https://kalcite-engine.github.io/kalcite-website/media/vscode-kalcite-preview.svg)

The extension package lives under `editors/vscode-kalcite/`. Package it with `npx @vscode/vsce package` when preparing a VS Code installable artifact. LSP-driven diagnostics and a complete graphical-editor workflow remain **Work in progress**; do not confuse syntax highlighting with a promise of live lint diagnostics.
