---
title: What works where
description: The difference between Calypso's on-device sandbox (Tier 1) and Termux (Tier 2), and when you need each.
---

Calypso runs your code in **two tiers**. Tier 1 is the default and needs no
setup. Tier 2 (Termux) is opt-in and unlocks a real local toolchain.

## Why two tiers?

Android sandboxes every app, and since Android 10 (API 29) apps **cannot
execute downloaded binaries** (the "W^X" rule). That's an OS-level limitation,
not a Calypso one — it's the reason a real toolchain needs Termux (a separate
app with its own permitted execution environment).

## The comparison

| Capability | Tier 1 — On-device sandbox | Tier 2 — Termux |
| --- | --- | --- |
| Setup required | None | One-time (see [setup](/termux-setup/)) |
| Run Python | ✅ Pyodide (WASM) | ✅ Real CPython |
| Run JavaScript | ✅ Sandboxed WebView | ✅ Real Node.js |
| Import pure-Python packages | ✅ via `micropip` | ✅ via `pip` |
| Import JS packages | ✅ via esm.sh (ES modules) | ✅ via `npm` |
| `npm install` (real `node_modules`) | ❌ | ✅ |
| Native / compiled packages | ❌ | ✅ |
| Node `require`, `fs`, `process` | ❌ | ✅ |
| Run any shell command | ❌ | ✅ Run Command in Termux |
| Interactive terminal (REPLs, prompts) | ❌ | ✅ Embedded Terminal |
| Preview a local dev server | ✅ Web Preview | ✅ Web Preview |
| Create React / Vue / Svelte / Angular projects | ❌ | ✅ New Project |
| IntelliSense (autocomplete, hover, diagnostics, go-to-def) | ⚠️ Basic (keywords + snippets) | ✅ Full (language servers) |
| `git` CLI | ❌ (use Calypso's built-in Git) | ✅ |
| AI assistant & agent (bring-your-own-key) | ✅ | ✅ |

The **AI assistant** is independent of these tiers: it only needs an internet
connection and your own API key, so it works whether or not you've set up Termux.
See [AI assistant](/ai-assistant/).

## Tier 1 — on-device sandbox (default)

This is the path for casual use and quick iteration:

- **Python** via Pyodide; **JavaScript** in a sandboxed WebView.
- Package imports without install: JS bare imports are rewritten to
  `https://esm.sh/<pkg>` and run as ES modules; Python uses `micropip` to fetch
  pure-Python wheels on first import.
- No filesystem, no shell, no native code.

When you hit a ceiling (a native package, Node's `require`/`fs`/`process`, or an
esm.sh failure), Calypso shows a hint pointing you toward Termux.

## Tier 2 — Termux (opt-in)

For real projects — `npm install`, native modules, a full shell. After a
[one-time setup](/termux-setup/), the Run menu gives you several ways to use it:

- **New Project** — scaffold React, Vue, Svelte, or Angular projects through
  Termux, install dependencies, and open the project in Calypso.
- **Run Active File in Termux** — runs the open file with the real toolchain and
  **streams output back into Calypso's Output panel**.
- **Run Command in Termux** — type any shell command (e.g. `npm install axios`)
  and stream its output, without leaving the editor. No more wrapping commands
  in an `install.sh`.
- **Terminal** — a full **interactive** terminal embedded in Calypso (real
  stdin, `Ctrl-C`, colours). Docked beside the editor on tablets, full-screen on
  phones. See [Terminal & web preview](/terminal/).
- **Web Preview** — open a dev server you started in the Terminal (e.g.
  `localhost:3000`) right inside Calypso. See [Terminal & web preview](/terminal/).

Termux also powers **[IntelliSense](/intellisense/)** — installing the language
servers (one tap on the setup screen) gives real autocomplete, hover,
diagnostics and go-to-definition, all running on-device.

Termux-backed projects live in Termux's workspace (`~/CalypsoProjects`), and
Calypso opens them through the Termux integration.

Calypso-created web projects are portable. They are ordinary framework projects,
so you can push them to GitHub, clone them on a desktop, edit them in VS Code,
and pull the changes back into Calypso.

:::tip[Working on a phone?]
You'll usually move faster with **Run Active File in Termux** and **Run Command
in Termux** — they do most of what a terminal does, with bigger text and no
on-screen-keyboard fiddliness. Reach for the embedded **Terminal** when you need
a genuinely interactive session (REPLs, prompts, watching live output); it's at
its best on a **tablet or with a hardware keyboard**.
:::

:::tip
Termux is always an **explicit choice**, never the default. If you never need
native packages or a shell, you never have to install it.
:::
