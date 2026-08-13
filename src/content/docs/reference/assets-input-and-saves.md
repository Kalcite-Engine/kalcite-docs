---
title: Assets, input, and saves
description: Project data inputs for scenes and runtime code.
---

Kalcite projects keep non-code inputs explicit in `kalcite.toml`: `assets_dir`, `input_map`, and `save_schema`. This makes project validation discover the same files that a build consumes.

## Assets

Put art and scene-referenced files below `assets_dir` (default: `assets`). `kalcite project-check --report` discovers and measures the packed asset data. For an individual PNG conversion, use:

```sh
kalcite asset-png assets/player.png -o assets/player.ksp
```

The report’s `asset pack` and `known static project data` are exact encoded artifact counts. They do not include the final executable or RAM footprint.

## Input

`input.kmap` is the declared input-map path. Static button navigation currently works with the game renderer and NumWorks-oriented controls. Pointer, gamepad, clipboard, IME text entry, and full desktop input routing are **Work in progress** or **Planned** depending on the backend; do not declare unavailable capabilities as if they were implemented.

## Saves

`save.kschema` is the declared save-schema path. Keep persistent data bounded and versioned. The manifest path is **Current** project metadata; a complete cross-platform persistence runtime is **Planned**. For NumWorks-specific storage direction and limitations, use the repository’s versioned technical documentation alongside the target guide.
