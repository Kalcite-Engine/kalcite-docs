---
title: Installation and requirements
---

Kallyup is the recommended bootstrapper for the Kalcite toolchain. Its scripts
detect missing host requirements, install them when the operating system allows
it, install Kallyup, and then install the selected toolchain profile.

## Install with Kallyup

Choose `minimal` for Kalcite and Kally, `developer` to add the language server,
or `full` to add the editor too.

```sh
# Linux and macOS
curl -fsSL https://raw.githubusercontent.com/Kalcite-Engine/kallyup/main/scripts/kallyup-bootstrap.sh | sh -s -- install developer
```

```powershell
# Windows PowerShell
irm https://raw.githubusercontent.com/Kalcite-Engine/kallyup/main/scripts/kallyup-bootstrap.ps1 | iex; kallyup install developer
```

The Linux launcher supports APT, DNF, Pacman, and Zypper. It may ask for your
password while installing system packages. On macOS, complete Apple's Command
Line Tools dialog once if it appears, then run the command again. On Windows,
the launcher uses Winget, Chocolatey, or Scoop to install Git and downloads
Rustup when Cargo is not present.

Kallyup does not alter your `PATH`. Add its Cargo binary directory to `PATH`
after installation if your shell cannot find `kalcite`, `kally`, or an optional
tool. Use `--root DIR` after the profile to choose a different installation
directory.

## Build from source

The workspace declares Rust 1.85 and edition 2024. Clone the authoritative
source, then run:

```sh
cargo test --workspace
```

For NumWorks builds, install the `thumbv7em-none-eabihf` Rust target. Building an `.nwa` also needs Node.js and `npx` for the NumWorks tooling route.

The bootstrap scripts install source builds from the repositories' `main`
branches. Use a platform package or Nix flake when you need a reproducible,
pinned build.
