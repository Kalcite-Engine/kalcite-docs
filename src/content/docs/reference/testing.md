---
title: Testing and fixtures
description: Test a Kalcite project and compiler behaviour.
---

Run the fixture runner over a directory:

**Status: Current.**

```sh
kalcite test tests/klc
```

It recursively discovers `.klc` files. A normal fixture must compile. Put `// kalcite: expect-error` on the first non-empty line when a fixture must fail. Text after the directive must occur in the emitted diagnostic.

```txt
// kalcite: expect-error expected `}`
public class Broken extend Game {
```

Organize fixtures by visible behaviour: `language/`, `scenes/`, `ui/`, `diagnostics/`, and `codegen/`. Keep one compiler contract per fixture. Use Rust unit tests for individual implementation details and `project-check` for a complete manifest/scene/asset contract.
