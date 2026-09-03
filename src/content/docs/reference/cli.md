---
title: CLI reference
---

The current CLI usage is:

```text
kalcite init [DIR] [--name NAME]
kalcite project-check [DIR]
kalcite project-build [DIR] [--target portable|numworks|desktop|ti|web]
kalcite ui-settings [DIR] [--title TITLE] [--width N] [--height N]
kalcite build-app FILE.klc --target numworks|desktop|ti [-o OUTPUT] [--name NAME] [--no-build]
kalcite build-nwa FILE.klc [-o GAME.nwa] [--name NAME] [--no-build] [--install]
kalcite build-ti FILE.klc [-o GAME.8xp] [--name NAME] [--no-build]
kalcite doctor numworks
kalcite libs | scene-check FILE.kscn | asset-png FILE.png [-o FILE.ksp]
kally add|update|remove|sync|status|lock
kalcite test [DIR] | run FILE.klc | check FILE.klc | lint FILE.klc
kalcite emit-mir FILE.klc | emit-rust FILE.klc
kalcite build FILE.klc [-o FILE.kco] [--target portable|numworks|desktop|ti|web]
```

Run the command without arguments to see the authoritative usage from your checked-out version. Some listed target names are recognized by parsing while their native backend may still be unavailable; follow command diagnostics.

## Everyday workflow

```sh
kalcite init my-game --name MyGame
kalcite project-check my-game --report
kalcite project-build my-game --target desktop --report
```

`init` creates the manifest-led project layout. `project-check` validates the manifest, scripts, scenes, assets, and capability contract without a target-native build. `project-build` performs the project build path after the same validation. `--target` and `--profile` override manifest values for that invocation only.

## Source commands

Use `check` for syntax/semantic diagnostics, `lint` for guidance, `emit-mir` and `emit-rust` to inspect compiler stages, and `build` to write a `.kco` compiled object. `run` invokes the desktop development runner; its current game path retains the 320×240 RGB565 logical surface. `--screenshot FILE.ppm` captures that runner output.

The [language lint reference](./lint/) lists all Kally diagnostic codes, their severity, and the command exit behaviour.

`build-app` produces a target application route for `numworks`, `desktop`, or `ti`. `build-nwa` is the NumWorks package shortcut; `build-ti` is the TI package route. `--no-build` leaves the generated native project available for inspection. Run `doctor numworks` before a NumWorks native build.

## Project data commands

`scene-check` validates one `.kscn` scene. `asset-png` converts a PNG to a `.ksp` asset. Kally manages Git package metadata and writes `kally.lock`; `kally status` audits the manifest, immutable lock, and `.kally/packages` cache without mutating the project. `libs` shows known bundled libraries.

## Application profiles (work in progress)

Kally adds `--profile cli|ui|game2d|embedded|wasm` to `project-check` and `project-build`, alongside explicit `capabilities` in `kalcite.toml`. It validates requests such as `window` and `keyboard` against the selected target before compilation.

Add `--report` to either project command to print currently measurable project costs: scenes, assets, compiled-scene data, declared pool capacity, and the selected capability contract. Native artifact size and stack estimates are explicitly labeled unavailable until the linker-analysis path exists. Read the [manifest reference](./manifest/) before selecting a profile.
