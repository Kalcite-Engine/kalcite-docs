---
title: Build reports
description: Inspect the project costs Kalcite can measure before linking.
---

Add `--report` to project validation or project build:

**Status: Work in progress.** It reports known pre-link facts and labels unavailable analyses explicitly.

```sh
kalcite project-check examples/game_project --report
kalcite project-build examples/game_project --target desktop --report
```

The report shows the selected profile and target; required and provided capabilities; script and global-class counts; scene nodes, connections, and autoloads; packed assets; compiled-scene bytes; and every `@pool(N)` capacity.

`compiled scenes`, `asset pack`, and `known static project data` are exact artifact byte counts. The last value is their sum only. It is not final binary size or RAM use. Pool entries are instance counts, not per-type byte estimates.

The report explicitly prints native artifact size and stack size as unavailable. That is intentional: Kalcite does not replace unknown target measurements with estimates. It also prints active fallbacks; the current build path reports `none` until documented adapters exist.
