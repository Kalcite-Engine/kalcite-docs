---
title: Applications and UI roadmap
description: Kalcite's path from constrained game scenes to native applications and scene-based interfaces.
---

Kalcite is evolving into a compiled native environment for command-line tools, scene-based interfaces, 2D games, WebAssembly, and constrained devices. Its non-negotiable invariants remain ahead-of-time compilation, no Kalcite VM, no garbage collector, and no hidden allocation.

## Current foundations

- The compiler lowers Kalcite through syntax, HIR, and MIR toward native-oriented backends.
- NumWorks uses a bounded `no_std` runtime.
- Static scenes already provide GUI nodes, containers, keyboard focus, and typed static button signals.
- The desktop runner is a native development window, currently presenting a fixed 320×240 RGB565 logical surface.

## Work in progress

Project profiles (`cli`, `ui`, `game2d`, `embedded`, and `wasm`) and explicit target capability validation are being introduced. Their job is to make a platform contract visible before compilation: a project must not silently depend on a missing service.

The current desktop runner only claims `window` and `keyboard`; constrained targets claim `keyboard`. Rich desktop services such as pointer input, clipboard, native dialogs, GPU rendering, and accessibility are not yet available capabilities.

## Planned UI work

The scene system will grow adaptive layout, text assets and metrics, pointer/touch input, node invalidation, accessibility metadata, typed bindings, themes, bounded virtual lists, and optional native platform adapters. These are planned rather than stable public APIs.

The design remains scene-first: UI is not a second framework. Controls, assets, rendering, input, diagnostics, and build budgets are shared with the engine.

## Planned language and tooling work

`Result`, `Option`, `defer`, exhaustive `match`, payload enums, bounded slices and strings, deterministic async state machines, C FFI, a unified build report, and richer LSP support are roadmap items unless the [language reference](../../reference/language/) states otherwise.

For the detailed source-of-truth plan, read [`docs/APPLICATION_UI_VISION.md`](https://github.com/kalcite-lang/kalcite/blob/main/docs/APPLICATION_UI_VISION.md) in the repository.
