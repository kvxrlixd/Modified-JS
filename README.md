# JS Modifications

Modified JavaScript code for Venge.io with visual improvements and client-side JS overrides.

Set of scripts focused on visibility, responsiveness, and general gameplay feel. Everything runs locally — no server-side changes.

---

## Package Info

This mod contains the following JavaScript files:

- `treehider.js`
- `fovunlock.js`
- `switchreloadfix.js`
- `charfix.js`

Each script runs independently but is designed to work together as one setup.

---

## Features

### Palm Tree Hider (`treehider.js`)

Removes palm trees on Sierra map for cleaner sightlines.

- Better visibility in fights
- Less visual clutter
- Easier enemy tracking

> Note: Trees are only hidden visually. Collision still exists, bullets don’t go through, and it’s not x-ray.

---

### High / Low FOV Unlock (`fovunlock.js`)

Extends the default FOV limit beyond in-game restrictions.

- Wider field of view
- Better awareness
- More comfortable gameplay at high sensitivity

#### Controls

- `]` → Increase FOV
- `[` → Decrease FOV

ADS behavior may stay stable.

---

### Weapon Switch + Reload Fix (`switchreloadfix.js`)

Improves weapon swapping behavior and consistency.

- Faster switching
- No delay between swaps
- Fixes reload interruptions during fast switching

---

### Character Texture Fix (`charfix.js`)

Fixes the black texture issue affecting the Shin character.

## Important

**Do NOT delete `charfix.js`.**

This file is required for proper rendering of Shin skins in-game.

- Fixes broken/black Shin textures
- Makes all Shin skins render correctly
- Keeps Shin visuals consistent with other heroes

---

## Notes

- Client-side only
- Uses internal game hooks
- No server-side modifications

---

## Disclaimer

Visual and gameplay feel changes only.

No collision changes, no server interaction, and no wall penetration.

---

# How to Install

## Client Version

1. Download the ZIP file
2. Extract it
3. Copy all `.js` files
4. Go to your Venge client directory (`Documents`)
5. Open the `userscript` folder
6. Paste all files there
7. Restart the game/client

---

## Browser Version

### Option 1: Tampermonkey

1. Install Tampermonkey
2. Create a new script
3. Paste the code
4. Save and enable it
5. Reload Venge.io

---

### Option 2: Console (Temporary)

1. Open DevTools (`F12`)
2. Go to the **Console**
3. Paste the script and run it

> Note: Large scripts may cause lag if pasted directly into the console.
