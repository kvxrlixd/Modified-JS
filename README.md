# JS modifications

Modified JavaScripts code for Venge.io with visual improvements and client-side JS overrides.

Set of scripts focused on visibility, responsiveness, and general gameplay feel. Everything runs locally — no server-side changes.

---

## Package Info

This mod contains **three JavaScript files**:

* Tree Hider (visual improvement)
* FOV Unlock
* Weapon Switch + Reload Fix

Each script runs independently but is designed to work together as one setup.

---

## Features

### Palm Tree Hider (Visual Only)

Removes palm trees on Sierra map for cleaner sightlines.

* Better visibility in fights
* Less visual clutter
* Easier enemy tracking

Note: Trees are only hidden visually. Collision still exists, bullets don’t go through, and it’s not x-ray.

---

### High / Low FOV Unlock

Extends the default FOV limit beyond in-game restrictions.

* Wider field of view
* Better awareness
* More comfortable gameplay at high sensitivity

Controls:

* `]` increase
* `[` decrease

ADS behavior stays stable.

---

### Weapon Switch + Reload Fix

Improves weapon swapping behavior and consistency.

* Faster switching
* No delay between swaps
* Fixes reload interruptions during fast switching

---

## Notes

* Client-side only
* Works after reloads and map changes
* Uses internal game hooks
* No server-side modifications

---

## Disclaimer

Visual and gameplay feel changes only.
No collision changes, no server interaction, no wall penetration.

---

## How to Install

### Client Version

* Download the ZIP file
* Extract it
* This mod contains **3 `.js` files**
* Copy all files
* Go to your Venge client directory (Documents)
* Open the `userscript` folder
* Paste the files there
* Restart the game/client

---

### Browser Version

#### Option 1: Tampermonkey

* Install Tampermonkey
* Create a new script
* Paste the code
* Save and enable it
* Reload Venge.io

#### Option 2: Console (temporary)

* Open DevTools (F12)
* Go to Console
* Paste script and run

Note: Large scripts may cause lag if pasted directly into console.
