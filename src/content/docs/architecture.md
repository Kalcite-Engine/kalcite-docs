---
title: Architecture overview
---

```text
.klc → kalcite-syntax → kalcite-hir → kalcite-mir → backend
                                              ├─ NumWorks / EADK / .nwa
                                              ├─ desktop development runner
                                              └─ TI route
```

Platform backends do not parse `.klc` themselves. The shared logical platform surface includes drawing, input and colors; NumWorks is the reference 320×240 RGB565 constrained target. The desktop runner currently mirrors that game surface. The platform API also exposes a fixed-capacity, generation-checked native-surface ABI so an application surface can host an embedded, resize-aware GPU game view without sharing raw toolkit handles. The renderer emits immutable, sorted command frames bound to those GPU targets, allowing the next game frame to be recorded while an adapter presents the previous one; concrete Metal, Vulkan, Direct3D, OpenGL, and Skia adapters remain future work.

The repository contains crates for syntax, objects, linting, projects, compiler lowering, portable engine/runtime pieces, platform APIs and tooling. Consult [Engine architecture](../contributors/engine-architecture/) for a contributor-oriented map.

See the [Applications and UI roadmap](./roadmap/applications-and-ui/) for profile and capability-contract work.
