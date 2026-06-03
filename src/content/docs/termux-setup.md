---
title: Termux setup
description: "Wire Termux to Calypso for a real local toolchain: node, npm, python, git, and an interactive terminal."
---

import { Steps } from '@astrojs/starlight/components';

Termux gives Calypso a real local toolchain: `node`, `npm`, `python`, `git`,
and `ttyd` for the embedded terminal. It is optional, and only needed when you
want native packages, `npm install`, Git CLI commands, framework projects, or a
real shell.

Setup is mostly one-tap. You type one command by hand in Termux, then Calypso
finishes the rest from its setup screen and streams the install into the Output
panel.

Open the setup screen any time from **Run menu -> Termux Setup Guide**.

## Part 1 - Once, inside Termux

These two steps are the only manual part.

<Steps>

1. **Install Termux from F-Droid**

   Use the **F-Droid** build, not the Play Store one. The Play Store version has
   `RUN_COMMAND` disabled, so it cannot accept commands from Calypso.

   Get it from [f-droid.org](https://f-droid.org/en/packages/com.termux/).

2. **Enable external apps**

   Open Termux and paste this single command. It cannot be automated because it
   is the security gate that lets Calypso talk to Termux:

   ```sh
   mkdir -p ~/.termux && echo "allow-external-apps=true" >> ~/.termux/termux.properties && termux-reload-settings
   ```

</Steps>

## Part 2 - Let Calypso finish

Everything below is a button on Calypso's **Termux setup screen**.

<Steps>

1. **Grant All-files access**

   Calypso needs this for project access and log handling. Tap **Grant
   All-files access** and enable Calypso in the system settings screen that
   opens.

2. **Grant the RUN_COMMAND permission**

   Termux's "Run commands" permission is a runtime permission. Having it in the
   manifest is not enough. Tap **Grant RUN_COMMAND permission**, then **Allow**.

3. **Grant Termux storage**

   Tap **Grant Termux storage**. Termux opens and asks for storage permission;
   tap **Allow**.

4. **Install the toolchain**

   Tap **Install toolchain & verify**. Calypso runs the setup through Termux:
   package upgrade, `nodejs`, `python`, `git`, `ttyd`, and npm compatibility
   settings. When it finishes, the **Toolchain** status row turns green.

5. **Install language servers**

   This is optional, but recommended if you want IntelliSense. Tap **Install
   language servers** to install TS/JS, Python, Bash, HTML/CSS/JSON, and YAML
   servers. See [IntelliSense](/intellisense/).

</Steps>

:::note[Why the upgrade and npm compatibility setting?]
The toolchain install does two non-obvious things for you:

- It upgrades Termux packages first so libraries match `node`.
- It configures npm conservatively so installs work reliably on Android/Termux.

This is why package installs work, while a few shortcut CLI commands may still
need Calypso's New Project flow or a direct `node node_modules/...` command. See
[Troubleshooting](/troubleshooting/).
:::

## Where your projects live

Calypso's Termux-backed projects live in Termux's project workspace:

```sh
~/CalypsoProjects
```

That is the same as:

```sh
/data/data/com.termux/files/home/CalypsoProjects
```

This keeps Node, npm, Git, and framework tooling inside Termux's own Linux-like
filesystem, which is more reliable than Android shared storage for real
development work.

Create projects in the right place in either of these ways:

- **From Calypso, recommended.** Use **New Project** from the project switcher to
  scaffold React, Vue, Svelte, or Angular projects, or use **Clone** to clone an
  existing Git repository. Calypso creates the folder under `~/CalypsoProjects`,
  runs the Termux command, and opens it in the editor.

- **From the Termux app.** `cd` into the Calypso workspace first:

  ```sh
  cd ~/CalypsoProjects
  mkdir myapp && cd myapp
  # now work here
  ```

Use the `...` menu in the project switcher to rename or delete projects created
under `~/CalypsoProjects`.

:::note[Older shared-storage docs]
Older Calypso builds used `/storage/emulated/0/CalypsoProjects` as the main
shared workspace. The current Termux-backed workflow uses `~/CalypsoProjects`.
Shared storage is still useful for moving files around, but it is not the
recommended place to create npm/framework projects.
:::

## Running code in Termux

Open or create a project from the project switcher. Termux-backed projects are
kept under `~/CalypsoProjects`; each subfolder is its own project. Then use the
**Run menu**:

- **Run Active File in Termux** runs the open file and streams output into
  Calypso's Output panel.
- **Run Command in Termux** lets you type a shell command and stream it. Great
  for installs and one-offs.
- **Terminal** opens a full interactive shell. See
  [Terminal & web preview](/terminal/).

## Creating framework projects

The easiest path is **New Project** from Calypso's project switcher. Calypso
uses Termux to scaffold the project, install dependencies, apply the small
Android-friendly script tweaks needed for Termux, and open the folder.

Supported project families include:

- React
- Vue
- Svelte
- Angular

Vite-based templates can be created as JavaScript or TypeScript projects, and
supported templates can optionally include Tailwind CSS.

:::note[About raw npm create commands]
Manual terminal commands still work for normal package installs and Git, but
some package CLI shortcuts depend on package command shims. Because Calypso
configures npm conservatively for Android/Termux compatibility, commands like
`npm create vite@latest` may fail even though Calypso's New Project flow works.
See [Troubleshooting](/troubleshooting/#npm-create-vitelatest-fails-with-create-vite-not-found).
:::

## A quick test

Put this in `app.js` inside your active Termux-backed project:

```js
console.log("hi");
console.log(require("os").platform());
```

**Run Active File in Termux** should stream `hi` then `android` into the panel
and finish with exit code 0.

For a real package test, use **Run Command in Termux**:

```sh
npm init -y && npm install cowsay
```

```js
// app.js
const cowsay = require("cowsay");
console.log(cowsay.say({ text: "Calypso + Termux!" }));
```

## Known limitations

- **Stop** on a streamed run cancels Calypso's live output tailing, but it may
  not kill the Termux process. For a session you fully control, use the
  [Terminal](/terminal/), where `Ctrl-C` works.
- Streamed output is poll-based, around 400 ms. It is near-live, not instant,
  and is fine for build and run logs.
