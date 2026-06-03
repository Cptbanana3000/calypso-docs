---
title: Getting started
description: Install Calypso, create your first file, and run it on-device.
---

Calypso is a code editor for Android that you can use entirely from your phone.
This page gets you from a fresh install to running your first program.

## 1. Install Calypso

Install the Calypso APK on your Android device. On first launch you'll land on
the home screen with a file explorer and an editor.

:::note
Calypso currently targets **Android**. Some power features (like Termux
integration) are Android-only by design — they rely on Android's app-to-app
command system.
:::

## 2. Create a file

1. Open the **file explorer** (the side panel).
2. Create a new file — for example `hello.py` or `hello.js`.
3. Type some code:

   ```python
   print("Hello from Calypso!")
   ```

## 3. Run it

Tap **Run**. The **Output panel** opens at the bottom and shows your program's
output live.

- **Python** runs via Pyodide (Python compiled to WebAssembly).
- **JavaScript** runs in a sandboxed WebView.

Both run **on-device with zero setup** — this is *Tier 1*, the default path.

## 4. Import a package (no install needed)

You can use many libraries without installing anything:

```js
// JavaScript — bare imports are rewritten to esm.sh automatically
import { camelCase } from "lodash-es";
console.log(camelCase("hello world"));
```

```python
# Python — pure-Python wheels are fetched via micropip on first use
import emoji
print(emoji.emojize("Calypso is here :rocket:"))
```

## 5. Create a real web project

With Termux set up, Calypso can scaffold full frontend projects from the
project switcher:

1. Open the project switcher.
2. Choose **New Project**.
3. Pick a framework such as **React**, **Vue**, **Svelte**, or **Angular**.
4. Choose the available options, such as JavaScript or TypeScript. For supported
   Vite templates, you can also enable Tailwind CSS.
5. Create the project.

Calypso runs the scaffold and dependency install through Termux, then opens the
new folder in the editor. These are normal framework projects with normal source
files, config files, `package.json`, and Git support.

You can also choose **Clone** in the project switcher, paste a Git URL, and
clone an existing repository into `~/CalypsoProjects`. If your clipboard already
contains a Git URL, Calypso pre-fills it. Folder names are checked before clone
so you do not accidentally overwrite an existing project.

To manage projects later, open the project switcher and use the `...` menu on a
project row. You can rename a project, delete a project, or remove an old
external folder from the recent list.

:::tip[Portable projects]
Projects created in Calypso are standard projects. You can push one to GitHub,
clone it on a desktop, edit it in VS Code, push changes back, then pull them
into Calypso and keep working.
:::

## What's next?

- Some things the on-device sandbox **can't** do (native packages, a real
  shell, `npm install` with binaries). See [What works where](/capabilities/)
  to understand the boundary.
- To get a full local toolchain, set up [Termux](/termux-setup/).
- Want real autocomplete, hover, diagnostics and go-to-definition? See
  [IntelliSense](/intellisense/).
- Working with a repo? See the [Git workflow](/git-workflow/).
