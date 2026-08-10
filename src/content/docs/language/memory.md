---
title: Fixed memory and objects
---

Kalcite is designed around bounded collections. Fixed arrays use `[Type; N]`; pool and handle forms expose game-object capacity explicitly.

```kalcite
@pool(32)
public class Bullet extend Entity {
  public Vec2fx position;
}

private Pool[Bullet; 32] bullets;
private Handle[Bullet] bullet;
```

Handles are generational in the runtime model, so a stale handle can be rejected. Do not assume a collection expands automatically.
