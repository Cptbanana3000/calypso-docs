---
title: Terminal & web preview
description: Use the embedded interactive terminal and preview a local dev server, both inside Calypso.
---

Two Tier-2 features that keep you in the editor: a real **interactive terminal**
and an in-app **web preview** for dev servers. Both need the
[Termux setup](/termux-setup/) done (the terminal in particular needs `ttyd`,
which the one-tap toolchain install includes).

## Embedded terminal

A full interactive terminal, running inside Calypso with a native Flutter
terminal view connected to a Termux shell. Unlike streamed runs, it has real
**stdin**, `Ctrl-C`, colours and scrollback — so REPLs, prompts, `git rebase
-i`, and watching a server's live logs all work.

Open it from **Run menu → Open Terminal** (or the Command Palette).

- **Tablets / wide screens:** it docks in the bottom panel next to **Output** —
  tap between the **Output** and **Terminal** tabs. Drag the handle at the top to
  resize.
- **Phones:** it opens full-screen.

The terminal starts in your **active project's folder**, and the session
**persists** — close and reopen it and you reconnect to the same shell. Opening
the terminal for a *different* project folder starts a fresh session there.

To clear the screen, type `clear` (just like any shell).

:::note[Manual npm commands]
Calypso's **New Project** flow works around Android/Termux command quirks for
you. Some raw terminal shortcuts, such as `npm create vite@latest`, may still
fail in Termux because npm package command shims are not always available when
`bin-links` are disabled. If that happens, use **New Project** for scaffolding,
or run the local tool directly with `node node_modules/...`.
:::

:::tip[Phone vs tablet]
On a **phone**, **Run Active File in Termux** and **Run Command in Termux** are
usually the faster path — they do most of what the terminal does, with bigger
text and no on-screen-keyboard fiddliness. The embedded **terminal** shines on a
**tablet or with a hardware keyboard**, where interactivity is comfortable.
:::

## Web preview

Started a dev server in the terminal — say an Express app on `localhost:3000`?
**Run menu → Open Web Preview** opens it inside Calypso, so you don't have to
switch to a browser.

- An **address bar** lets you type any URL (it defaults to `http://localhost:3000`
  and remembers your last one). The `http://` is added for you.
- **Reload** (↻) after you change code; a progress bar shows loads.
- It reaches your Termux dev server directly — Android shares `localhost` across
  apps, so no extra setup is needed.

A typical loop:

```sh
# in the Terminal
npm install express
node server.js      # "Server running on port 3000"
```

Then **Open Web Preview** → `localhost:3000` renders in-app. Edit, save, restart
the server in the terminal, tap **Reload**.

:::note
If the preview shows *connection refused*, the server isn't running yet — start
it in the terminal first, then reload.
:::
