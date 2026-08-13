---
title: 'Tutorial: build a static game scene'
description: Create, validate, and inspect a small Kalcite game project.
---

This tutorial exercises the current static-scene path rather than promising a dynamic UI runtime.

```sh
kalcite init hello-game --name HelloGame
cd hello-game
```

Set `target = "desktop"` and `profile = "game2d"` in `kalcite.toml`. Add a main scene under `scenes/main.kscn`:

```ini
[node "Main" type="Scene"]

[node "Title" type="Label" parent="Main"]
position = [12, 8]
text = "HELLO KALLY"
color = Yellow

[node "Start" type="Button" parent="Main"]
position = [12, 40]
text = "START"
selected = true
```

Then validate and inspect the known costs:

```sh
kalcite scene-check scenes/main.kscn
kalcite project-check . --report
```

The report proves scene and asset facts before native linking. It does not claim final executable size or stack use. Add scripts below `scripts/`, assets below `assets/`, and declare bounded classes with `@pool(N)` as the project grows.
