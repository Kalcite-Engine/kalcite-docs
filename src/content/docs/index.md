---
title: What is Kalcite?
description: A factual introduction to the Kalcite language and engine.
---

Kalcite is a compiled programming language and scene engine evolving toward games, native applications, and command-line tools. Its current source implementation emphasizes explicit costs: no embedded VM, no garbage collector, no hidden allocation, and fixed-capacity game-object pools.

It compiles `.klc` source through syntax, HIR and MIR stages toward platform backends. NumWorks is the reference constrained target; a desktop development runner and TI route are also implemented. A web backend is **Planned**, not currently documented as available.

## Project status

Kalcite is actively evolving. Use the status labels in these docs: **Current** means implemented in the inspected source; **Work in progress** means code exists but the public workflow is still changing; **Planned** means roadmap work.

## First concepts

- `.klc`: Kalcite source file.
- `.kco`: versioned Kalcite Compiled Object, currently carrying generated Rust `no_std` code.
- `kalcite.toml`: project manifest.
- `@pool(N)`: fixed-capacity pool metadata for a class.

Read the [Applications and UI roadmap](./roadmap/applications-and-ui/) for the distinction between today’s static GUI foundation and planned adaptive application UI.
