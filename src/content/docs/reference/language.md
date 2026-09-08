---
title: Language reference
---

## Implemented vocabulary

The specification documents primitive types including `bool`, integer types, `usize`, `isize`, optional `f32`, fixed-point `fx8`/`fx16`, `angle8`, and `Color565`. Narrowing conversions are explicit with `as`.

Declarations include fields, constants, classes, structs, methods, fixed arrays, attributes, visibility, modules and imports. The HIR parser supports calls, member access, numeric and boolean expressions, fixed-array literals and indexing, unary/binary operators, assignment, `if`/`else`, `while`, fixed-array `for item in items` loops, `break`, `continue`, `defer`, and `return`. Array indexes must be numeric and only fixed arrays can be indexed; `for` likewise accepts only a fixed array and its binding is local to its body.

Bounded strings have a portable byte API: `Text.length(value)` returns `u32`, `Text.byte_at(value, index)` returns `u8`, and `Text.byte_at_u32(value, index)` returns `u32`. `Text.equals(left, right)` returns `bool`; it compares the used bytes of two bounded strings and may be used with different capacities. `Text.starts_with(value, prefix)` and `Text.ends_with(value, suffix)` compare a bounded edge without allocation, and `Text.contains(value, needle)` searches its used bytes without allocation. Their second operands may be string literals, for example `Text.equals(reference, "local")`, `Text.starts_with(source, "git:")`, `Text.ends_with(file_name, ".kscn")`, and `Text.contains(node_type, "Collision")`; the compiler stores those literals in fixed caller-owned memory. The compiler typechecks these intrinsics, allowing allocation-free text validation, comparison, and hashing in ordinary KLC packages.

## Deterministic cleanup with `defer`

`defer expression;` schedules an expression for the end of its current lexical scope. Deferred expressions run in last-in, first-out order, including when the scope is left through `return`. The return value is evaluated before the cleanup expressions run. This lowering is direct Rust code generation: it does not allocate a closure, start a VM, or introduce a garbage collector.

```text
public void SaveSettings() {
    var file = Fs.open("settings");
    defer Fs.close(file);
    WriteSettings(file);
}
```

## Loop exit with `break`

`break;` is valid only within a `while` body and leaves the innermost loop.
Before control leaves that loop, Kalcite evaluates deferred expressions from the
loop body and every nested block being exited, in LIFO order. Defers belonging
to an outer scope remain active until that scope is left.

```text
while true {
    defer CloseAttempt();
    if Ready() {
        defer ReleaseProbe();
        break; // ReleaseProbe(), then CloseAttempt()
    }
}
```

## Iteration control with `continue`

`continue;` is valid only within a `while` body and starts the next iteration
of the innermost loop. As with `break`, Kalcite evaluates deferred expressions
from the loop body and every nested block being exited, in LIFO order. Defers
registered outside the loop stay active.

```text
while HasWork() {
    defer FinishAttempt();
    if ShouldRetry() {
        defer ResetProbe();
        continue; // ResetProbe(), then FinishAttempt()
    }
    ProcessWork();
}
```

## Planned language work

`match`, payload enums, scene references, compile-time pool allocation and stronger type checking are listed as future work. They are not stable reference syntax.
