---
title: 'Tutorial: inspect a NumWorks build'
description: Validate a constrained project and enter the native NumWorks route.
---

NumWorks is Kalcite’s reference constrained target. Start with a project that keeps the default `game2d` profile and set `target = "numworks"` in `kalcite.toml`.

```sh
kalcite project-check examples/game_project --target numworks --report
kalcite doctor numworks
```

The check confirms that required services fit the NumWorks capability contract: today that is `keyboard`. A request such as `window` or `native_dialogs` is rejected before a build.

To produce the native application route from a source file:

```sh
kalcite build-app examples/pong/src/main.klc --target numworks --name Pong
# or package explicitly:
kalcite build-nwa examples/pong/src/main.klc --name Pong -o Pong.nwa
```

Use `--no-build` to generate native sources without invoking the final packaging step. The project report’s asset and scene data sizes are exact pre-link artifacts; do not treat them as the calculator’s total RAM or final NWA size.
