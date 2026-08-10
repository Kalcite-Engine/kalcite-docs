---
title: Troubleshooting and FAQ
---

### No `kalcite.toml` found

Project commands walk from the supplied path to find a project root. Run them inside a Kalcite project or pass the project directory.

### NumWorks build prerequisites missing

Install the `thumbv7em-none-eabihf` Rust target; the `.nwa` route also requires Node.js and `npx`.

### Is WebAssembly supported?

Not as a current documented backend. It is planned in the roadmap.
