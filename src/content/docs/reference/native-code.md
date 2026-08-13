---
title: Native Rust and assembly
description: Explicit low-level escape hatches.
---

Native blocks are for hardware access, experiments, or a missing library boundary. They are deliberately `unsafe`: Kalcite does not inspect, optimize, or provide memory-safety guarantees for their contents.

**Status: Current.**

```txt
unsafe rust {
    core::hint::black_box(42u32);
}

unsafe rust[numworks] {
    let address = 0x2000_0000usize;
    core::hint::black_box(address);
}

unsafe asm[numworks] {
    "nop",
    options(nomem, nostack)
}
```

Supported native guards are `numworks`, `desktop`, `linux`, `windows`, `macos`, `web`, and `wasm`. An unguarded Rust block must compile across every selected native build. Assembly always requires a target and uses Rust `core::arch::asm!` operand syntax.

The linter reports `KLC3001`/`KLC3002` when native code is present. Prefer ordinary KLC or a portable Rust library for reusable logic. Native blocks are best kept small and near the hardware-specific call site.
