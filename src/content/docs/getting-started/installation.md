---
title: Installation and requirements
---

Kalcite is currently built from source with Rust. The workspace declares Rust 1.85 and edition 2024. Clone the authoritative source, then run:

```sh
cargo test --workspace
```

For NumWorks builds, install the `thumbv7em-none-eabihf` Rust target. Building an `.nwa` also needs Node.js and `npx` for the NumWorks tooling route.

There is no verified standalone installer in the inspected source. This page will be updated when one exists.
