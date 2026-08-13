---
title: Scenes and nodes
description: Author and validate static Kalcite scene files.
---

Scenes use `.kscn` files. They are statically parsed and validated, then compiled into project data. This is not a dynamic reflection tree: node types, accepted properties, parent links, connections, and many layout facts are known before the target build.

**Status: Current static scene path; Work in progress for adaptive application UI.**

```ini
[node "Main" type="Scene"]

[node "Title" type="Label" parent="Main"]
position = [12, 8]
text = "READY"
color = Yellow

[node "Start" type="Button" parent="Main"]
position = [12, 40]
text = "PLAY"
selected = true

@signal Main/Start.pressed -> Main.on_start
```

Run `kalcite scene-check scenes/main.kscn` for a single file or `kalcite project-check .` for every declared scene.

## Current catalogue

Current core nodes include `Node`, `Game`, `Scene`, and `Timer`. 2D nodes include `Node2D`, `Entity`, `Marker2D`, `Sprite2D`, `AnimatedSprite2D`, `Camera2D`, `TileMap`, and `ParallaxLayer2D`. `Sprite` remains a compatible alias for `Sprite2D`.

Physics nodes include `CollisionShape2D`, `StaticBody2D`, `CharacterBody2D`, `Area2D`, `Fluid2D`, `RayLight2D`, `LightOccluder2D`, `RayTracer3D`, and `RaySphere3D`.

GUI nodes include `Control`, `Panel`, `ColorRect`, `Label`, `Button`, `TextureRect`, `NinePatchRect`, and `ProgressBar`. Layout nodes include `Container`, `MarginContainer`, `HBoxContainer`, `VBoxContainer`, `GridContainer`, and `CenterContainer`.

## Static GUI behaviour

Controls use integer coordinates and dimensions (`x`, `y`, `position`, `width`, `height`, `visible`, and `layer`). Container placement and button navigation are calculated from the compiled scene. A button with `selected = true` receives initial focus; directional keys choose a geometric neighbour and `OK` emits `pressed`.

This static GUI path is **Current** for the constrained game renderer. The adaptive scene-to-native-application UI compiler is **Work in progress**; see [Applications and UI](../roadmap/applications-and-ui/).

## Asset properties

Properties such as a sprite texture, a tileset, or a texture rectangle refer to files from the project asset directory. Scene validation checks the node contract; project validation packs the discovered assets.
