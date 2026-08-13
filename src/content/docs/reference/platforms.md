---
title: Platforms and compatibility
description: Current target contracts and backend status.
---

Kalcite validates platform services before compilation. A target only promises capabilities it currently implements; no unavailable feature is silently emulated.

| Target           | Status                     | Current contract                                                                       |
| ---------------- | -------------------------- | -------------------------------------------------------------------------------------- |
| `numworks`       | Current constrained target | `keyboard`; static scene/game renderer and native build path.                          |
| `desktop`        | Work in progress           | `window`, `keyboard`; game runner plus Settings UI sample.                             |
| `portable`       | Current object target      | No platform services.                                                                  |
| `web`            | Planned backend            | Declared target only; no provided services or shipped runtime.                         |
| TI package route | Current command route      | Use `build-ti`; target capability contracts do not currently expose `ti` in manifests. |

## Renderer distinction

The desktop game runner intentionally scales the same 320×240 RGB565 logical display as the NumWorks route. This is **Current** and useful for representative game testing.

`kalcite ui-settings` generates a separate resizable desktop Settings application. It demonstrates mouse/keyboard interaction, focus, toggles, and bounded text input. It is **Work in progress**, not yet a compiler for arbitrary UI scenes. Native dialogs, accessibility adapters, pointer capability contracts, rich text input/IME, and a web UI runtime are **Planned**.

## Capability matrix

| Capability | Desktop | NumWorks | Portable | Web |
| --- | --- | --- | --- |
| `window` | Current | unavailable | unavailable | unavailable |
| `keyboard` | Current | Current | unavailable | unavailable |
| `gpu`, `pointer`, `gamepad`, `filesystem`, `network`, `threads`, `audio`, `clipboard`, `native_dialogs`, `accessibility` | unavailable | unavailable | unavailable | unavailable |

The capability names exist so projects can state a future requirement early. Until a target advertises one in a build report, requesting it fails validation.
