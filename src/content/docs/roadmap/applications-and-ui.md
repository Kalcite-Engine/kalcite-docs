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
- `kalcite-platform-api` provides a fixed-capacity native surface ABI with generation-checked handles, resize-aware GPU targets, and embedded game views inside an application surface.
- `kalcite-renderer` detaches each sorted command queue into an immutable frame bound to one GPU-target generation, so a resize cannot present a stale frame and rendering can be pipelined with recording.
- The no-window reference host validates that frame at the presentation boundary; native toolkit adapters can adopt this lifecycle without sharing engine or toolkit object ownership.
- Destroying an application surface invalidates its embedded game targets, preventing an orphaned view from presenting a previously recorded frame.

## Work in progress

Project profiles (`cli`, `ui`, `game2d`, `embedded`, and `wasm`) and explicit target capability validation are being introduced. Their job is to make a platform contract visible before compilation: a project must not silently depend on a missing service.

The `ui` profile establishes `window` and `keyboard` as its baseline. Other services remain opt-in manifest requirements, so a feature such as a native file dialog cannot become an accidental dependency. The work-in-progress CLI reports the effective capability contract in project checks and builds, including scene, asset, and declared-pool measurements through `--report`.

The current desktop runner only claims `window` and `keyboard`; constrained targets claim `keyboard`. Rich desktop services such as pointer input, clipboard, native dialogs, GPU rendering, and accessibility are not yet available capabilities. The lower-level surface ABI lets future adapters validate a native view and GPU target without claiming those services exist today.

## Planned UI work

The scene system will grow adaptive layout, text assets and metrics, pointer/touch input, node invalidation, accessibility metadata, typed bindings, themes, bounded virtual lists, and optional native platform adapters. SwiftUI, GTK4, Qt6, WinUI3, and Kotlin Compose adapters can implement the shared surface ABI while retaining ownership of their native handles and event loops. Those bindings are planned rather than stable public APIs.

The design remains scene-first: UI is not a second framework. Controls, assets, rendering, input, diagnostics, and build budgets are shared with the engine.

## Resizable Settings sample (work in progress)

`kalcite ui-settings` generates a standalone native desktop Settings sample. It uses a resizable window separate from the 320×240 game framebuffer and demonstrates pointer activation, Tab/Enter focus navigation, a dark-mode toggle, and a bounded 24-character text field.

It is an executable vertical slice, not yet the public scene-to-UI compiler path. Adaptive scene layout, font shaping, full text editing, clipboard support, and accessibility remain planned.

## Planned language and tooling work

`Result`, `Option`, `defer`, exhaustive `match`, payload enums, bounded slices and strings, deterministic async state machines, C FFI, a unified build report, and richer LSP support are roadmap items unless the [language reference](../../reference/language/) states otherwise.

For the detailed source-of-truth plan, read [`docs/APPLICATION_UI_VISION.md`](https://github.com/Kalcite-Engine/Kalcite/blob/main/docs/APPLICATION_UI_VISION.md) and its [delivery plan](https://github.com/Kalcite-Engine/Kalcite/blob/main/docs/APPLICATION_UI_DELIVERY_PLAN.md) in the repository.
