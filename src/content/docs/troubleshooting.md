---
title: Troubleshooting
description: Fixes for the common errors when running code in Calypso and Termux.
---

Solutions to the errors people actually hit. Most Termux issues come from
skipping a step in the [setup guide](/termux-setup/).

## Termux

### "Termux refused the command" / SecurityException

Calypso dispatched a command but Termux rejected it. Two common causes:

1. **`allow-external-apps` is not enabled.** In Termux:

   ```sh
   echo "allow-external-apps=true" >> ~/.termux/termux.properties
   termux-reload-settings
   ```

2. **RUN_COMMAND permission is not granted at runtime.** This permission is
   dangerous-level on Android, so having it in the manifest is not enough. Open
   Calypso's **Termux setup screen**, tap **Grant RUN_COMMAND permission**, then
   tap **Allow**.

Also make sure you installed the **F-Droid** Termux, not the Play Store build.
The Play Store build disables `RUN_COMMAND`.

### `CANNOT LINK EXECUTABLE "node": cannot locate symbol OSSL_PROVIDER_add_conf_parameter`

Your Termux packages are out of sync. Upgrade everything, then reinstall Node:

```sh
pkg upgrade -y
pkg install nodejs
```

This is why the setup guide upgrades packages before installing tools.

### `npm install` fails with `EACCES` on a symlink

Some Android/Termux project locations do not behave like a normal Linux
filesystem for npm command shims. The one-tap **Install toolchain** button sets
the conservative npm compatibility setting for you, but if you set up Termux by
hand, run:

```sh
npm config set bin-links false
```

`npm install` then succeeds. Libraries you `import` or `require()` work fine.
Only command-line bins may need Calypso's wrapper flow or direct `node
node_modules/...` commands.

### `npm create vite@latest` fails with `create-vite: not found`

This can happen when npm command shims are unavailable. `npm create
vite@latest` downloads the package, then tries to run the package CLI named
`create-vite`. If npm did not create that command shim, the shell prints:

```text
sh: 1: create-vite: not found
```

Use Calypso's **New Project** flow for React, Vue, Svelte, and Angular projects.
It calls the underlying tools in a Termux-safe way and installs dependencies for
you.

For manual experiments, install the package first and run its JavaScript entry
directly:

```sh
npm install create-vite@latest
node node_modules/create-vite/index.js .
```

After installing dependencies, if `npm run dev` says `vite: not found`, run
Vite directly:

```sh
node node_modules/vite/bin/vite.js --host 127.0.0.1
```

### I made a folder/project in Termux but Calypso can't see it

Create Termux-backed projects under Calypso's Termux workspace:

```sh
cd ~/CalypsoProjects
mkdir myapp && cd myapp
```

If you created the folder somewhere else, move it into that workspace:

```sh
mv ~/myapp ~/CalypsoProjects/
```

Easiest of all: create projects **from Calypso** with **New Project**. See
[Termux setup -> Where your projects live](/termux-setup/#where-your-projects-live).

### New files, such as `node_modules`, don't show up in the explorer

Termux writes files out-of-process, so the explorer needs to re-read from disk.
Calypso auto-refreshes the tree when a Termux run finishes. If something still
looks stale, refresh the explorer or reopen the project.

### Output isn't streaming into Calypso

- Make sure you used **Run Active File in Termux** or **Run Command in Termux**.
- Confirm the Termux setup checks are green, especially permissions and
  toolchain verification.
- For an interactive session instead of streamed output, use the
  [Terminal](/terminal/).

## On-device sandbox

### "This needs a native package / a real shell" hint appears

You have hit the sandbox ceiling: for example a native Python package, Node's
`require` / `fs` / `process`, or an esm.sh import that failed. The on-device
runner cannot do these. Use Termux for that project.

### A Python `import` can't be found

The on-device runner only fetches pure-Python wheels via `micropip`. Some
packages also have a different import name than their PyPI name. If it cannot
be resolved on-device, use Termux with real `pip`.

## IntelliSense

### The IntelliSense chip is grey / nothing autocompletes

Grey means IntelliSense is off or not set up. Tap the chip. The panel tells you
what is missing and offers the fix: install Termux, install the language
servers, or enable IntelliSense. See [IntelliSense](/intellisense/).

### The chip is red

Calypso could not reach the language server. Tap the chip and **Retry**. If it
keeps failing, reinstall the language servers from the Termux setup screen.

### It's slow the first time

The language server cold starts on the first file of a session, then stays warm.
If it feels stuck, open the chip panel and restart the language servers.

## Git

### Push/pull rejected: authentication failed

Use a personal access token, not your account password. GitHub and most hosts no
longer accept passwords for Git. The token needs repo access.

### Pull won't apply: needs a merge

Your branch and the remote both have new commits, so it is not a fast-forward.
Calypso shows a merge preview. Complete the merge, resolving any conflicts, to
finish. See [Git workflow -> merges](/git-workflow/#pulling-and-merges).
