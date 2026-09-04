---
title: Editor integrations
---

Kalcite provides clients for VS Code and Zed, backed by `kalcite-lsp`. Install
the Kallyup `developer` or `full` profile so `kalcite-lsp` is available on
`PATH`. The server provides diagnostics, completions, hover, go-to-definition,
references, safe project-wide rename, document symbols, and workspace symbol
search for `.klc` projects. It also supplies lexer-backed semantic tokens for
keywords (including `defer`), types, functions, variables, numbers, and
strings; positions follow the LSP UTF-16 convention, including in documents
containing non-ASCII text. Completion includes language snippets for `defer`,
`return`, `if`, and `while`; hovering `defer` explains its deterministic
scope-exit behavior.

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

The shared Tree-sitter grammar parses the current control-flow surface
(`defer`, `if`/`else`, `while`, member calls, binary expressions, and compound
assignments), so structural highlighting does not depend solely on the LSP.

The native [Kalcite Editor](https://github.com/Kalcite-Engine/kalcite-editor)
currently hosts its window and eframe integration in Rust. Its viewport grid
snap, grid-density, and collision-radius policies are already compiled from
KLC during the Cargo build, which is an executable migration boundary toward a
KLC-led editor. This is **Work in progress**, not a claim that most of the
editor is written in KLC yet.
