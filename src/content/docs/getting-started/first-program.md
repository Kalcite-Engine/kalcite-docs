---
title: First program
---

Create a source file such as `main.klc`:

```kalcite
public class Pong extend Game {
  public void Update() {
    if (Input.held(Key.Up)) {
      // update state
    }
  }
}
```

Validate or lint a source file with the CLI:

```sh
cargo run -p kalcite-cli -- check path/to/main.klc
cargo run -p kalcite-cli -- lint path/to/main.klc
```

The exact engine APIs appropriate to a game depend on the implemented backend; use the examples in the Kalcite source as the reference.
