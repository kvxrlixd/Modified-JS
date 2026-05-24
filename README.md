# Illegal-Hell
Modified Hell mod for venge.io, with visual advantages and overridden JS mechanics.

# Venge.io Client Enhancements

Small set of client-side scripts for Venge.io to improve visibility and gameplay feel.

Everything runs locally. No server-side changes.

---

## Features

### Tree Hider (Visual Only)

Removes palm trees on Sierra map for cleaner sightlines.

* Better visibility in fights
* Less visual clutter
* Easier enemy tracking

Note: Trees are only hidden visually. Collision still exists, bullets don’t go through, and it’s not x-ray.

---

### FOV Unlock

Extends the default FOV limit.

* Wider field of view
* Better awareness
* More comfortable high-sens gameplay

Keys:

* `]` increase
* `[` decrease

ADS behavior stays stable.

---

### Weapon Switch + Reload Fix

Improves weapon swapping behavior.

* Faster switching
* No animation delay
* Fixes reload issues during fast swaps

---

## Notes

* Client-side only
* Works after reloads and map changes
* Uses internal game hooks
* No server-side modification

---

## Disclaimer

Visual and gameplay feel adjustments only.
No collision changes, no server interaction, no wall penetration.

---

## How to install

Client

* Download the ZIP file
* Unzip / extract it
* You’ll find 3 `.js` files
* Copy all of them
* Go to your Venge client directory in Documents
* Open the `userscript` folder
* Paste the files there
* Restart the game/client

Browser
Use one of these methods:

Option 1: Tampermonkey

* Install Tampermonkey
* Create a new script
* Paste the code
* Save and enable it
* Reload Venge.io

Option 2: Console (temporary)

* Open browser DevTools (F12)
* Go to Console
* Paste the script and run it

Note: Large scripts may lag your browser when pasted directly into console.
