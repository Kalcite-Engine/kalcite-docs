---
title: Kally 0.14
description: The current versioned Kalcite documentation line.
---

Kally is the current Kalcite documentation line: **0.14**. The code name identifies a coherent set of language, engine, toolchain, examples, and manual content. The numeric workspace version remains the compatibility identifier.

Use the version menu in the header when another released manual becomes available. Instructions in this manual target the Kally line; the development snapshot is intentionally separate because it may describe unreleased work.

## What this version guarantees

Kally documents only the scope marked **Current**. **Work in progress** means code or a sample exists but its public contract can still change. **Planned** is not an API promise.

The invariants for this line are ahead-of-time compilation, no embedded Kalcite VM, no garbage collector, and no hidden allocation on constrained targets. See the [application and UI roadmap](../../roadmap/applications-and-ui/) for precise UI status.

## Compatibility and updates

Patch updates correct defects and documentation without intentionally changing accepted KLC syntax, manifest meaning, or `.kco` compatibility. A breaking change requires a migration note and a new release-line decision.

The root [versioning policy](https://github.com/kalcite-lang/kalcite/blob/main/docs/VERSIONING.md) defines how a release branch/tag freezes this manual. For reproducible reports, include both the Kally version and the exact release tag or commit.
