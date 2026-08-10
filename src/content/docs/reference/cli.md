---
title: CLI reference
---

The current CLI usage is:

```text
kalcite init [DIR] [--name NAME]
kalcite project-check [DIR]
kalcite project-build [DIR] [--target portable|numworks|desktop|ti|web]
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
