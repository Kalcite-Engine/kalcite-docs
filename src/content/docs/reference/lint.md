---
title: Language lint
description: Use Kalcite's static lint pass to make bounded-memory and portability risks visible.
---

`kalcite lint` analyses one `.klc` file and reports source-level risks without producing a build artifact. It complements `kalcite check`: check validates the program; lint calls out code that is accepted but deserves attention.

```sh
kalcite lint examples/native_escape/src/main.klc
```

![Terminal output for the native escape example: KLC3001 warns for Rust and KLC3002 for ASM.](https://kalcite-engine.github.io/kalcite-website/media/lint-native-escape.svg)

Warnings leave the command successful; one or more error-level diagnostics return a failing exit status, which makes the command suitable for CI.

## Current rules

| Code      | Level   | Meaning                                                                                  |
| --------- | ------- | ---------------------------------------------------------------------------------------- |
| `KLC0001` | Error   | The source cannot be parsed.                                                             |
| `KLC1001` | Warning | An `Entity` has no explicit `@pool(N)` capacity.                                         |
| `KLC1002` | Error   | A field uses an unbounded or heap-oriented type such as `String`, `Vec`, `Box`, or `Rc`. |
| `KLC1101` | Warning | An immutable `@export` field cannot be edited by an inspector.                           |
| `KLC1102` | Error   | `@node` has no scene path.                                                               |
| `KLC1201` | Error   | `@pool(0)` is invalid.                                                                   |
| `KLC1202` | Warning | A pool exceeds 4096 slots and is likely unsuitable for NumWorks.                         |
| `KLC1203` | Error   | A pool capacity is not a valid integer.                                                  |
| `KLC2001` | Warning | A public function name is only one character.                                            |
| `KLC3001` | Warning | Native Rust bypasses Kalcite safety and portability checks.                              |
| `KLC3002` | Warning | Native ASM is architecture-specific and bypasses Kalcite safety guarantees.              |

## A bounded-memory example

```klc
@pool(32)
public class Bullet extend Entity {
  public Vec2fx position;
}
```

The explicit capacity allows the runtime and reviewer to reason about storage. In contrast, `String` and `Vec[T]` fields produce `KLC1002`; use a bounded representation such as `SmallString[N]`, `[T; N]`, `Pool[T; N]`, or `Handle[T]` where applicable.

## Native escape hatches

The linter does not forbid target-specific native code. It keeps that choice visible. Keep native blocks small, target-guarded, and close to the hardware boundary:

```klc
unsafe rust[numworks] {
  core::hint::spin_loop();
}
```

Read the [native code reference](./native-code/) for the supported syntax and portability limits.
