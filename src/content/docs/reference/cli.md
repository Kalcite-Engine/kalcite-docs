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
kalcite package-lock|package-add|package-remove|package-sync
kalcite test [DIR] | run FILE.klc | check FILE.klc | lint FILE.klc
kalcite emit-mir FILE.klc | emit-rust FILE.klc
kalcite build FILE.klc [-o FILE.kco] [--target portable|numworks|desktop|ti|web]
```

Run the command without arguments to see the authoritative usage from your checked-out version. Some listed target names are recognized by parsing while their native backend may still be unavailable; follow command diagnostics.

## Application profiles (work in progress)

The application/UI branch adds `--profile cli|ui|game2d|embedded|wasm` to `project-check` and `project-build`, alongside explicit `capabilities` in `kalcite.toml`. This contract work is not yet part of every released CLI build. It validates requests such as `window` and `keyboard` against the selected target before compilation.

Add `--report` to either project command to print currently measurable project costs: scenes, assets, compiled-scene data, declared pool capacity, and the selected capability contract. Native artifact size and stack estimates are explicitly labeled unavailable until the linker-analysis path exists.
