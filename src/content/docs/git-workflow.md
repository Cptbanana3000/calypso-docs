---
title: Git workflow
description: Clone, fetch, pull, push, and resolve merge conflicts in Calypso — with credentials remembered.
---

Calypso has built-in Git (powered by libgit2), so you can version your code
without a terminal. This page covers the everyday flow and how merges work.

## Credentials

The first time you talk to a remote (fetch / pull / push), Calypso asks for your
**username** and a **token** (e.g. a GitHub personal access token).

- Your **username is remembered** across sessions.
- Your **token is cached for the session** so you don't retype it on every
  fetch/pull/push.

:::tip
For GitHub, create a personal access token with `repo` scope and use it as the
token. Don't use your account password — GitHub no longer accepts it for Git.
:::

## Everyday flow

1. **Clone** a repository from the project switcher, or open an existing one.
   The Clone dialog can pre-fill a Git URL from your clipboard and checks for
   duplicate destination folders.
2. Edit files. Changed files appear in the **Source Control** panel.
3. **Stage** and **commit** with a message.
4. **Push** to send commits to the remote. **Fetch** / **Pull** to bring remote
   changes down.

The built-in Source Control panel and the Termux terminal can both work with the
same repository. Use the panel when you want a guided workflow, or use normal
terminal commands when you prefer them:

```sh
git add .
git commit -m "Update app"
git push origin main
```

Calypso initializes new repositories on **main**. If you open an older project
that uses another branch name, Calypso shows that branch instead.

## Working between phone and desktop

Projects created in Calypso are normal Git repositories. A common loop is:

1. Push from Calypso.
2. Clone or pull on your desktop.
3. Edit in VS Code or another editor.
4. Commit and push from the desktop.
5. Pull back into Calypso.

For Vite and Angular projects, Calypso may make `package.json` scripts more
explicit so they run reliably in Termux, for example calling Vite through
`node node_modules/vite/bin/vite.js`. Those scripts still work on desktop.

## Pulling and merges

When you pull, Calypso checks what kind of update it is:

- **Already up to date** — nothing to do.
- **Fast-forward** — your branch simply moves forward; applied directly.
- **Needs a merge** — your branch and the remote both have new commits. Calypso
  shows a **merge preview** so you can see what's coming before committing.

### Resolving conflicts

If a merge has conflicts:

1. Conflicted files are marked in **Source Control**.
2. Open a conflicted file — the conflict markers
   (`<<<<<<<`, `=======`, `>>>>>>>`) are shown in the editor.
3. Edit to the desired result (or use the per-file menu to take **one side**),
   then **mark the file resolved**.
4. When all conflicts are resolved, **commit the merge** to finish.

You can also **abort the merge** to return to the state before you pulled.

## Tips

- Commit in small, focused chunks — it makes merges and conflict resolution
  much easier.
- Pull before you start a session so you're working on top of the latest.
