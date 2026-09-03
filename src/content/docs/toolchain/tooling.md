---
title: Editor integrations
---

Kalcite provides clients for VS Code and Zed, backed by `kalcite-lsp`. Install
the Kallyup `developer` or `full` profile so `kalcite-lsp` is available on
`PATH`. The server provides diagnostics, completions, hover, go-to-definition,
and document symbols for `.klc` projects.

![Kalcite VS Code extension preview based on the extension's syntax grammar and snippets.](https://kalcite-engine.github.io/kalcite-website/media/vscode-kalcite-preview.svg)

The VS Code extension lives under `editors/vscode-kalcite/`. It starts
`kalcite-lsp` automatically for Kalcite files; configure
`kalcite.languageServer.path` if the binary is outside `PATH`. Package it with
`npx @vscode/vsce package` when preparing a VSIX artifact.

The dedicated [Zed extension](https://github.com/Kalcite-Engine/zed-kalcite)
pins the published [Kalcite Tree-sitter grammar](https://github.com/Kalcite-Engine/tree-sitter-kalcite), supplies highlighting and structural queries, and
resolves `kalcite-lsp` from the active worktree. Clone it, then use **zed:
install dev extension** to install it locally. Registry publication is tracked
separately through the Zed extensions repository.
