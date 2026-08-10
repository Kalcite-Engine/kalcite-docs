---
title: Projects
---

`kalcite init [DIR] [--name NAME]` creates a project. A project root contains `kalcite.toml`; the source tree uses `scripts/` for Kalcite scripts and may contain scenes, assets and input maps.

```sh
cargo run -p kalcite-cli -- init MyGame --name MyGame
cargo run -p kalcite-cli -- project-check MyGame
cargo run -p kalcite-cli -- project-build MyGame --target numworks
```

Project discovery and validation are real CLI stages. Generated build material belongs under `.kalcite/` and should be treated as generated output.
