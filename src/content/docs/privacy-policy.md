---
title: Privacy Policy
description: How Calypso IDE handles your data — what stays on your device, what leaves it, and why.
---

_Last updated: 13 June 2026_

This Privacy Policy explains how **Calypso IDE** ("Calypso", "the app", "we")
handles information when you use it. Calypso is a phone-first code editor for
Android. It is built to be **local-first**: your code and projects live on your
own device, and Calypso does not operate any servers that collect your data.

## Summary

- **No account, no sign-up, no login.** Calypso does not have user accounts.
- **No advertising, no behavioral analytics, no profiling.** We do not embed ad
  networks or SDKs that track what you do in the app. We do use a crash- and
  error-reporting service to capture diagnostics when something goes wrong — see
  [Crash and error reporting](#crash-and-error-reporting).
- **Your files stay on your device** — unless you use the optional AI assistant,
  which sends the code or text you choose to your own AI provider using your own
  API key. See [AI assistant](#ai-assistant-optional).
- **Network requests are tied to actions you take** — running code that imports
  packages, using Git, installing a toolchain, or asking the AI assistant. Those
  go to third-party services you choose (for AI, the provider whose key you
  entered), not to Calypso. The one automatic exception is crash diagnostics.

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

## AI assistant (optional)

Calypso includes an optional AI assistant. It is **bring-your-own-key**: you
supply an API key from an AI provider (currently [Anthropic](https://www.anthropic.com)),
and Calypso talks to that provider **directly from your device**. We do not
operate any AI servers, we do not proxy your requests, and we never receive your
key, your prompts, or the responses.

- **Your API key** is stored in your device's secure keystore (Android Keystore,
  via encrypted on-device storage). It is sent only to the AI provider to
  authenticate your own requests — never to us.
- **What is sent, and when.** Only when you invoke an AI action — Explain, Fix,
  or Improve a selection, or send a chat message — does Calypso send the relevant
  content to the provider: the code you selected, the file you choose to include
  as context, and the messages you type. Nothing is sent until you trigger an
  action.
- **Billing and handling.** Usage is billed to your own provider account. Your
  prompts and the provider's responses are governed by **the provider's** own
  privacy policy and terms (for Anthropic, see their
  [privacy policy](https://www.anthropic.com/legal/privacy)). Calypso does not
  store your conversations; they exist only in memory for the current session.

## Crash and error reporting

To find and fix bugs, Calypso uses **Sentry**, a crash- and error-reporting
service. When the app crashes or hits an unexpected error, a diagnostic report
is sent to Sentry containing the error and technical context such as your device
model, Android version, and app version. We have configured Sentry **not** to
collect personal identifiers such as your IP address.

If you tap **Report** on an AI response, Calypso additionally sends Sentry the
reason you selected and an excerpt of that response (which may include code), so
we can review flagged AI content as required for AI-powered apps. This happens
**only when you tap Report**.

Sentry processes this data on our behalf under its own
[privacy policy](https://sentry.io/privacy/).

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
- Anthropic — the AI assistant, when you configure an API key (your prompts and
  the responses)
- Sentry — crash and error diagnostics, and AI responses you choose to report

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
