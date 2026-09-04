---
title: Language reference
---

## Implemented vocabulary

The specification documents primitive types including `bool`, integer types, `usize`, `isize`, optional `f32`, fixed-point `fx8`/`fx16`, `angle8`, and `Color565`. Narrowing conversions are explicit with `as`.

Declarations include fields, constants, classes, structs, methods, fixed arrays, attributes, visibility, modules and imports. The HIR parser supports calls, member access, numeric and boolean expressions, arrays, unary/binary operators, assignment, `if`/`else`, `while`, `break`, `defer`, and `return`.

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

## Planned language work

`match`, payload enums, scene references, compile-time pool allocation and stronger type checking are listed as future work. They are not stable reference syntax.
