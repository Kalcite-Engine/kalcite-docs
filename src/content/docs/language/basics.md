---
title: Language basics
---

Kalcite uses braces and semicolons. Canonical declarations place the type before the name.

```kalcite
public const u8 MaxLives = 3;
private u16 score = 0;
Vec2fx position = Vec2fx(10, 20);
var elapsed = System.millis();
```

Comments use `//` or `/* ... */`; nested block comments are not allowed in the 0.1 specification. Classes use `extend`, not `extends`.

```kalcite
public class Slime extend Enemy {
  public u8 Health = 3;
}
```
