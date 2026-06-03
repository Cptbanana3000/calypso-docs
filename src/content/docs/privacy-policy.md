---
title: Privacy Policy
description: How Calypso IDE handles your data — what stays on your device, what leaves it, and why.
---

_Last updated: 3 June 2026_

This Privacy Policy explains how **Calypso IDE** ("Calypso", "the app", "we")
handles information when you use it. Calypso is a phone-first code editor for
Android. It is built to be **local-first**: your code and projects live on your
own device, and Calypso does not operate any servers that collect your data.

## Summary

- **No account, no sign-up, no login.** Calypso does not have user accounts.
- **No analytics, no advertising, no tracking.** We do not embed analytics SDKs,
  ad networks, or telemetry. We do not profile you.
- **Your files stay on your device.** Code, projects, and settings are stored
  locally and are not uploaded to us.
- **Network requests happen only when you ask for them** — running code that
  imports packages, using Git, or installing a toolchain. Those requests go to
  third-party services you choose, not to Calypso.

## Information Calypso stores on your device

Calypso stores the following **locally on your device only**. It is never
transmitted to us.

- **Your projects and files** — the code you write and the files in your
  workspaces.
- **Editor settings and recent projects** — preferences such as theme, font,
  and your recently opened project list (stored with Android `SharedPreferences`).
- **Git author identity** — the `user.name` and `user.email` you set for commits
  are stored in each repository's local Git config, as Git normally does.
- **Git username** — if you push or pull over HTTPS, your remote username is
  saved on-device so you don't have to retype it.

## Information Calypso does **not** store

- **Git passwords / access tokens** are held **in memory for the current app
  session only**. They are never written to disk and are cleared when the app
  is closed (or when a request fails authentication). They are sent only to the
  Git host you are pushing to or pulling from.

## When Calypso connects to the network

Calypso makes network connections **only as a direct result of an action you
take**. It does not phone home in the background. The relevant features:

- **Running code with packages (on-device).** When you run JavaScript that
  imports packages, Calypso fetches them from [esm.sh](https://esm.sh). When you
  run Python, the Pyodide runtime is downloaded from the
  [jsDelivr](https://www.jsdelivr.com) CDN, and pure-Python packages are
  installed from the [Python Package Index (PyPI)](https://pypi.org) via
  micropip. These requests contain the package names you import.
- **Git.** When you fetch, pull, or push, Calypso connects to the Git remote you
  have configured (for example, GitHub), using the credentials you enter for
  that operation.
- **Termux toolchain (optional).** If you use the Termux integration, commands
  you run (such as `npm install` or framework scaffolding) connect to the
  package registries those tools use (for example, the
  [npm registry](https://www.npmjs.com)).

We do not control these third-party services and they have their own privacy
policies. Calypso sends them only what is needed to perform the action you
requested (e.g. a package name, or your Git credentials to your Git host).

## Permissions Calypso requests, and why

- **All files access (`MANAGE_EXTERNAL_STORAGE`).** Calypso is a code editor and
  IDE. It needs to create, read, and write your project files on shared storage
  so that projects can be edited in the app and shared with the Termux
  environment (a separate app that cannot read Calypso's private folder, and
  vice-versa). Calypso accesses files only to provide editing, running, and
  version-control features you invoke. It does not scan your storage for any
  other purpose, and it does not upload your files.
- **Run command in Termux (`com.termux.permission.RUN_COMMAND`).** This lets
  Calypso hand off build/run commands to the Termux app **at your request** so
  you can use a real Linux toolchain (Node, Python, Git, language servers).
  Calypso does not run commands you have not initiated.

## Third-party services

When you use the relevant features, your requests reach these third parties
under their own privacy policies:

- esm.sh — JavaScript package delivery
- jsDelivr — Pyodide (Python-in-WebAssembly) runtime
- PyPI — Python package installs (via micropip)
- npm registry — Node package installs (via Termux)
- Your chosen Git host (e.g. GitHub) — Git fetch/pull/push

The **Termux** app, used by Calypso's power features, is a separate application
published independently and is not operated by us.

## Children's privacy

Calypso is a developer tool and is not directed at children. It does not
knowingly collect personal information from anyone, including children.

## Changes to this policy

We may update this policy as the app evolves. Material changes will be reflected
here with an updated "Last updated" date.

## Contact

If you have questions about this Privacy Policy, contact us at
**captainbanana360@protonmail.com**.
