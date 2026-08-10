---
title: Compiler and targets
---

Kalcite lowers source into a declaration AST, typed HIR, then a flattened, platform-neutral MIR before invoking a backend. This boundary prevents each target from implementing its own language parser.

## NumWorks

The NumWorks backend emits a small `no_std` Rust application using the EADK ABI. It does not serialize the `.nwa` format itself; standard NumWorks tooling consumes the generated project.

## Desktop

The development runner maps host input to the portable API and keeps the game-facing logical display at 320×240 RGB565. It supports headless frame output for CI-friendly checks.

## Web

**Planned.** The project roadmap calls for a WebAssembly backend; no current implementation guide is promised here.
