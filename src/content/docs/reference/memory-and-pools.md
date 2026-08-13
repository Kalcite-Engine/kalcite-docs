---
title: Memory and pools
description: Use bounded object storage and understand Kalcite cost guarantees.
---

Kalcite does not embed a VM or garbage collector. Object capacity must be declared where dynamic-looking game state is needed. A pool lowers to static storage and returns generation-checked handles.

**Status: Current for fixed pools and handles; Planned for whole-program stack analysis.**

```txt
@pool(32)
public class Bullet extend Entity {
    public Vec2fx position;
}

private Pool[Bullet; 32] bullets;
private Handle[Bullet] bullet;
```

`Pool[T; N]` becomes a fixed-capacity `StaticPool<T, N>` in the native runtime. `Handle[T]` is generational, so a removed object cannot be confused with a later object that reuses its slot.

## What is known today

`project-check --report` lists each declared capacity and their total as instance counts. It also reports exact compiled-scene and packed-asset bytes. These are useful bounds, but they are not a claimed RAM byte total: final class layout, executable size, stack size, and render metrics are **unavailable** until target analysis exists.

Avoid wording such as “allocation-free everywhere” for code in `unsafe rust` blocks or target libraries: those paths are explicit escapes from the language contract. See [native code](./native-code/).

## Design rules

- Pick capacities from a real gameplay/UI maximum, then test the full condition.
- Keep handles short-lived and validate failure paths when an object was removed.
- Treat a pool capacity as part of a public performance budget.
- Use the build report in reviews; it is the authoritative pre-link accounting surface.

Arena allocation, stack estimation, and UI list virtualization are **Planned** application work, not current language guarantees.
