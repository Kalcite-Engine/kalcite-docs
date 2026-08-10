---
title: Project and file formats
---

- `.klc` is Kalcite source.
- `.kco` is a versioned, checksum-validated Kalcite Compiled Object. It is not an embedded VM.
- `.nwa` is a NumWorks application produced through the EADK/nwlink route.
- `.kscn` is validated by `kalcite scene-check`.
- `kalcite.toml` is the project manifest.

Binary/internal formats may change. Treat the source implementation as authoritative and avoid relying on undocumented layout details.
