---
title: Architecture overview
---

```text
.klc → kalcite-syntax → kalcite-hir → kalcite-mir → backend
                                              ├─ NumWorks / EADK / .nwa
                                              ├─ desktop development runner
                                              └─ TI route
```

Platform backends do not parse `.klc` themselves. The shared logical platform surface includes drawing, input and colors; NumWorks is the reference 320×240 RGB565 target.

The repository contains crates for syntax, objects, linting, projects, compiler lowering, portable engine/runtime pieces, platform APIs and tooling. Consult [Engine architecture](../contributors/engine-architecture/) for a contributor-oriented map.
