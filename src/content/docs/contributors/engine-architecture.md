---
title: Engine architecture
---

Key responsibilities are separated into crates: `kalcite-syntax` lexes/parses; `kalcite-hir` and `kalcite-mir` lower programs; `kalcite-compiler` orchestrates; backend crates emit targets; `kalcite-object` owns `.kco`; `kalcite-project` discovers/validates projects; `kalcite-linter` provides lint rules; and platform/runtime crates define execution boundaries.

The root repository describes a super-project that references independently versioned crate repositories. Check repository boundaries before contributing.
