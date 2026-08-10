---
title: Language reference
---

## Implemented vocabulary

The specification documents primitive types including `bool`, integer types, `usize`, `isize`, optional `f32`, fixed-point `fx8`/`fx16`, `angle8`, and `Color565`. Narrowing conversions are explicit with `as`.

Declarations include fields, constants, classes, structs, methods, fixed arrays, attributes, visibility, modules and imports. The HIR parser supports calls, member access, numeric and boolean expressions, arrays, unary/binary operators, assignment, `if`/`else`, `while`, and `return`.

## Planned language work

`match`, payload enums, scene references, compile-time pool allocation and stronger type checking are listed as future work. They are not stable reference syntax.
