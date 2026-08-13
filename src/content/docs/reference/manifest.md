---
title: Project manifest
description: Configure a Kalcite project with kalcite.toml.
---

`kalcite.toml` is the project contract. It selects the input directories, target, product profile, and platform services that a project requires. Run `kalcite project-check .` after changing it; validation happens before source compilation.

**Status: Current.** The capability matrix reflects the checked-out Kally implementation.

```toml
[project]
name = "Settings"
entry_scene = "scenes/main.kscn"
scripts_dir = "scripts"
scenes_dir = "scenes"
assets_dir = "assets"
input_map = "input.kmap"
save_schema = "save.kschema"
target = "desktop"
profile = "ui"
capabilities = "window, keyboard"
```

## Fields

| Field          | Default            | Meaning                                                  |
| -------------- | ------------------ | -------------------------------------------------------- |
| `name`         | `MyGame`           | Project display and build name.                          |
| `entry_scene`  | `scenes/main.kscn` | Main scene, relative to the project root.                |
| `scripts_dir`  | `scripts`          | Directory recursively scanned for `.klc` scripts.        |
| `scenes_dir`   | `scenes`           | Directory recursively scanned for `.kscn` scenes.        |
| `assets_dir`   | `assets`           | Directory packed as project assets.                      |
| `input_map`    | `input.kmap`       | Named input actions.                                     |
| `save_schema`  | `save.kschema`     | Bounded saved-data schema.                               |
| `target`       | `portable`         | `portable`, `numworks`, `desktop`, or `web`.             |
| `profile`      | `game2d`           | `cli`, `ui`, `game2d`, `embedded`, or `wasm`.            |
| `capabilities` | empty              | Comma-separated, explicitly requested platform services. |

Unknown manifest keys are currently ignored. Keep the `[project]` header: `kalcite init` always writes it.

## Profiles and capabilities

Profiles describe the product shape, not a hidden runtime. The `ui` profile requires `window` and `keyboard`; `embedded` requires `keyboard`; the other current profiles add no baseline service. Extra services must be requested deliberately.

Known capability names are `window`, `gpu`, `pointer`, `keyboard`, `gamepad`, `filesystem`, `network`, `threads`, `audio`, `clipboard`, `native_dialogs`, and `accessibility`.

At present, the desktop target provides `window` and `keyboard`; NumWorks provides `keyboard`; `portable` and `web` provide none. `web` is a declared object target, not a shipped web backend. A request that a target cannot provide is an error, never a silent fallback.

```sh
kalcite project-check . --target desktop --profile ui --report
```

Use the [build report](./build-reports/) to see the required and provided contracts.
