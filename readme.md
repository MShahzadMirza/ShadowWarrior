# 🌑 Shadow Warrior
### A 3D Action RPG built with HTML, CSS, JavaScript & Babylon.js

> **Shadow Warrior** is a browser-based 3D Action RPG inspired by the feeling of progression found in games like Solo Leveling, while featuring an original world, characters, monsters, abilities, story, and gameplay systems.

> **Vision:** Create a lightweight yet immersive Action RPG that runs entirely in the browser while delivering satisfying combat, meaningful progression, and an exciting journey from an ordinary warrior to a legendary shadow hunter.

---

# 📖 Overview

Shadow Warrior is designed as a modern third-person Action RPG built with Babylon.js.

The game focuses on:

- Fast-paced combat
- Character progression
- Exploration
- Loot collection
- Skill unlocks
- Dungeon crawling
- Boss battles

The player begins as a weak warrior and gradually becomes powerful through experience, equipment, and mastering unique shadow abilities.

---

# 🎯 Version 1 Goal

The objective is **not** to build a massive open-world RPG immediately.

Instead, Version 1 should deliver one polished, enjoyable experience.

Version 1 includes:

- Third-person character
- One playable map
- One dungeon
- Three enemy types
- One boss battle
- Basic combat system
- XP & Level System
- Inventory
- Equipment
- Four unique skills
- Loot drops
- Save & Load system

---

# 🛠 Technology Stack

```
HTML5

CSS3

JavaScript (ES6)

Babylon.js
```

---

# 📂 Project Structure

```
Shadow-Warrior/

│
├── index.html
├── style.css
├── game.js
│
├── js/
│   ├── player.js
│   ├── camera.js
│   ├── movement.js
│   ├── combat.js
│   ├── enemy.js
│   ├── world.js
│   ├── inventory.js
│   ├── skills.js
│   ├── ui.js
│   ├── quests.js
│   ├── save.js
│   ├── effects.js
│   └── utils.js
│
├── assets/
│   ├── models/
│   ├── textures/
│   ├── animations/
│   ├── particles/
│   ├── sounds/
│   ├── music/
│   └── icons/
│
├── shaders/
│
└── README.md
```

---

# 🎮 Core Gameplay Loop

```
Spawn

↓

Explore

↓

Fight Monsters

↓

Collect Loot

↓

Gain Experience

↓

Level Up

↓

Increase Stats

↓

Unlock Skills

↓

Fight Stronger Enemies

↓

Enter Dungeon

↓

Defeat Boss

↓

Repeat
```

---

# 🌍 World

## Version 1

```
Training Grounds

↓

Whispering Forest

↓

Ancient Dungeon

↓

Boss Chamber
```

## Future Areas

- Frozen Peaks
- Crimson Desert
- Forgotten Kingdom
- Shadow Temple
- Abyss Realm
- Sky Islands

---

# 🧍 Player

The player begins as an ordinary warrior.

By defeating monsters and completing quests, they evolve into a legendary **Shadow Warrior**.

Progression includes:

- Leveling Up
- Unlocking Skills
- Collecting Better Equipment
- Improving Stats
- Defeating Powerful Bosses

---

# 📊 Player Stats

```
Level

Experience

Health

Mana

Strength

Defense

Agility

Movement Speed

Critical Chance

Critical Damage

Luck
```

---

# ⭐ Level System

Enemies reward Experience Points.

After enough XP:

```
LEVEL UP
```

Rewards

- +5 Stat Points
- Full Health Recovery
- Unlock New Skills
- Access Stronger Areas

---

# 📈 Attributes

Players can invest points into

```
Strength

Vitality

Agility

Mana

Luck
```

---

# ⚔ Combat System

## Controls

| Key | Action |
|------|---------|
| W A S D | Move |
| Mouse | Rotate Camera |
| Left Click | Light Attack |
| Right Click | Heavy Attack |
| Shift | Dash |
| Ctrl | Dodge Roll |
| Space | Jump |
| Q | Skill 1 |
| E | Skill 2 |
| R | Ultimate Skill |
| I | Inventory |
| C | Character Menu |
| ESC | Pause |

---

## Combat Features

- Light Attack Combo
- Heavy Attack
- Dash
- Dodge Roll
- Jump Attack
- Critical Hits
- Knockback
- Invincibility Frames

---

# 🌑 Shadow Skills

## Shadow Slash

Fast ranged slash.

Cooldown: 5 seconds

---

## Dark Explosion

Creates an explosion of shadow energy.

Cooldown: 10 seconds

---

## Shadow Blink

Instant teleport.

Cooldown: 6 seconds

---

## Shadow Nova

Massive area attack.

Cooldown: 12 seconds

---

# 🎒 Inventory

Stores

- Weapons
- Armor
- Potions
- Crafting Materials
- Quest Items
- Boss Drops

---

# 🛡 Equipment

Equipment Slots

```
Weapon

Helmet

Armor

Gloves

Boots

Ring

Necklace
```

Every item improves player statistics.

---

# 🎁 Loot

Enemies may drop

```
Gold

Potions

Weapons

Armor

Materials

Rare Items
```

---

# 👹 Enemies

## Shadow Slime

- Slow
- Weak
- Melee Attack

---

## Shadow Goblin

- Fast
- Sword User
- Occasionally Dodges

---

## Shadow Wolf

- Very Fast
- Leap Attack

---

## Dungeon Boss

- Massive Health Pool
- Multiple Attack Patterns
- Phase Changes

---

# 🤖 Enemy AI

Enemy Behavior

```
Idle

↓

Patrol

↓

Detect Player

↓

Chase

↓

Attack

↓

Return

↓

Idle
```

---

# 📜 Quest System

Example Quest

```
Eliminate 10 Shadow Wolves
```

Rewards

- XP
- Gold
- Potions

Future Quest Types

- Hunt Monsters
- Collect Resources
- Explore Areas
- Defeat Bosses
- Escort NPCs

---

# 💎 Item Rarity

```
Common

Uncommon

Rare

Epic

Legendary
```

Future

```
Mythic

Ancient

Divine
```

---

# 💾 Save System

Using

```
localStorage
```

Saved Data

- Player Level
- XP
- Inventory
- Equipment
- Gold
- Position
- Skills
- Quests

---

# 🖥 User Interface

Top Left

```
Health Bar

Mana Bar

Level

Experience Bar
```

Bottom Center

```
Skill Bar

Cooldown Timers
```

Bottom Right

```
Mini Map

Gold
```

Right Side

```
Quest Tracker
```

Pause Menu

```
Resume

Settings

Save

Exit
```

---

# 🎨 Art Direction

Style

- Dark Fantasy
- Stylized Graphics
- Dynamic Lighting
- Atmospheric Fog
- Magical Particle Effects
- Clean Modern UI

---

# 🎵 Audio

- Ambient Music
- Battle Music
- Boss Themes
- Sword Effects
- Footsteps
- Monster Sounds
- UI Effects

---

# 🚀 Development Roadmap

## ✅ Milestone 1 — Engine Setup

- Babylon.js Scene
- Lighting
- Camera
- Ground
- FPS Counter

---

## ✅ Milestone 2 — Player Controller

- WASD Movement
- Jump
- Sprint
- Dash
- Gravity
- Collision

---

## ✅ Milestone 3 — Third-Person Camera

- Smooth Follow
- Mouse Rotation
- Zoom
- Camera Collision

---

## ✅ Milestone 4 — Animation System

- Idle
- Walk
- Run
- Jump
- Roll
- Attack

---

## ✅ Milestone 5 — Combat System

- Weapon Hit Detection
- Enemy Damage
- Health Bars
- Death Animation

---

## ✅ Milestone 6 — Enemy AI

- Patrol
- Chase
- Attack
- Return
- Respawn

---

## ✅ Milestone 7 — RPG System

- XP
- Levels
- Stats
- Attribute Points

---

## ✅ Milestone 8 — Inventory

- Loot
- Equipment
- Potions

---

## ✅ Milestone 9 — Skills

- Skill Unlocking
- Cooldowns
- Mana System
- Visual Effects

---

## ✅ Milestone 10 — Dungeon

- Dungeon Map
- Mini Boss
- Final Boss
- Treasure Chest

---

## ✅ Milestone 11 — Save System

- Save Game
- Load Game
- Auto Save

---

## ✅ Milestone 12 — Polish

- Sound Effects
- Visual Effects
- UI Improvements
- Optimization
- Bug Fixes

---

# 📅 Suggested Timeline

| Week | Goal |
|------|------|
| 1 | Engine Setup |
| 2 | Player Controller |
| 3 | Third-Person Camera |
| 4 | Animations |
| 5 | Combat |
| 6 | Enemy AI |
| 7 | RPG System |
| 8 | Inventory |
| 9 | Skills |
| 10 | Dungeon |
| 11 | Save System |
| 12 | Polish & Testing |

---

# 🎯 Version 1 Scope

### Maps

- Training Grounds
- Whispering Forest
- Ancient Dungeon

### Character

- One Playable Warrior

### Weapons

- Iron Sword

### Skills

- Four Shadow Skills

### Enemies

- Shadow Slime
- Shadow Goblin
- Shadow Wolf

### Boss

- Ancient Shadow Guardian

### Items

Approximately 20

### Quests

10

### Maximum Level

20

### Estimated Playtime

2–4 Hours

---

# 🔮 Future Features

- Open World
- Multiple Classes
- Mounts
- Crafting
- Pets
- Guilds
- Multiplayer
- PvP
- Procedural Dungeons
- World Bosses
- Achievements
- Cosmetics
- Controller Support
- Mobile Version

---

# 📌 Development Philosophy

Build **small**, **modular**, and **maintainable** systems.

Each feature should be completed, tested, and polished before moving to the next milestone.

Version 1 serves as the foundation for a much larger Action RPG. Every future update should expand on this foundation without requiring major rewrites.

> **"Start simple. Build solid. Expand forever."**