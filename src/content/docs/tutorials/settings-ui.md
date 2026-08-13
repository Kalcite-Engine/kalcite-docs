---
title: 'Tutorial: run the Settings UI sample'
description: Generate the current resizable desktop UI vertical slice.
---

The Settings sample is the current desktop UI vertical slice. It is intentionally a generated application, not yet arbitrary `.kscn` UI compilation.

```sh
kalcite ui-settings .kalcite/ui-settings --title "Kally Settings" --width 900 --height 600
```

The generated project has a `desktop` target and `ui` profile. Validate its contract and inspect the output:

```sh
kalcite project-check .kalcite/ui-settings --report
kalcite project-build .kalcite/ui-settings --target desktop --profile ui --report
```

The sample provides a resizable surface, mouse/keyboard interaction, focus traversal, a toggle, and bounded text entry. It does not prove native controls, IME support, accessibility integration, a general retained UI layout engine, or a complete scene UI compiler. Those remain **Work in progress** or **Planned**.

For a project that will later need another platform service, add it to `capabilities` first. Validation will reject it until the selected target advertises it.
