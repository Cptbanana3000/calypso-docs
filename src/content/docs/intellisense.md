---
title: IntelliSense
description: Real autocomplete, hover, diagnostics, signature help and go-to-definition in Calypso — powered by language servers running on-device in Termux.
---

Calypso has real **IntelliSense** — the same kind of language smarts you get on
a desktop editor: accurate autocomplete, type-aware hover, live error
diagnostics, signature help, and go-to-definition. It runs **on-device**, using
language servers inside [Termux](/termux-setup/) bridged to the editor over
local loopback — no remote server, no account.

## What you get

Once enabled, supported files get:

- **Autocomplete** — real, type-aware completions (not just keywords).
- **Hover** — types and docs when you tap/point at a symbol.
- **Diagnostics** — errors and warnings underlined live as you type.
- **Signature help** — parameter hints while you're inside a call.
- **Go-to-definition** — jump to where a symbol is defined, across files.

## Supported languages

| Language | Server |
| --- | --- |
| TypeScript / JavaScript (`.ts .tsx .js .jsx .mjs .cjs`) | `typescript-language-server` |
| Python (`.py`) | `pyright` |
| Bash (`.sh .bash`) | `bash-language-server` |
| HTML / CSS / JSON | `vscode-langservers-extracted` |
| YAML (`.yaml .yml`) | `yaml-language-server` |

More can be added over time. (Native-binary servers like `gopls` and
`rust-analyzer` aren't bundled yet — they need a Go/Rust toolchain in Termux.)

## Enabling it

IntelliSense runs the servers in Termux, so it needs the [Termux
setup](/termux-setup/) done first. Then it's essentially automatic:

1. Finish the [Termux setup](/termux-setup/) (toolchain installed).
2. On the **Termux setup screen**, tap **Install language servers**.
3. When the install finishes, **IntelliSense turns itself on** — open a
   supported file and you're done.

That's the whole flow: install the servers, and it just works. You can also
toggle it any time in **Settings → IntelliSense**, or from the Command Palette
(**Enable / Disable IntelliSense**).

:::note[Why Termux?]
Real language servers are full programs. Calypso runs them in Termux — the same
loopback approach as the [embedded terminal](/terminal/) — and bridges them to
the editor. So IntelliSense is a **Tier 2** feature (it needs Termux), while
basic completion below works with no setup.
:::

## Without Termux: basic completion

Even with no setup, the editor still gives you **keyword + word-in-document
completion** and **snippets** (tab-stop templates for JS, TS, Python, HTML, CSS,
Dart and Markdown — type a prefix and press Tab/Enter). You only need the
language servers above for *type-aware* completion, hover, and diagnostics.

## The status chip

The editor's status bar shows an **IntelliSense** chip for supported files. Its
colour tells you the state, and **tapping it** opens a panel that explains what's
happening and offers the fix:

- **Grey** — off, or Termux/servers not yet installed → tap to enable or to open
  setup.
- **Amber "IntelliSense…"** — the server is starting (a cold start takes a few
  seconds the first time).
- **Green** — connected and live.
- **Red "IntelliSense !"** — couldn't reach the server → tap to retry or reopen
  setup.

So if completions aren't showing, the chip is the first place to look.

## Go to definition

Three ways to jump to a definition:

- Press **F12** (with a hardware keyboard).
- Tap the **go-to-definition** button on the accessory bar (it appears only when
  a language server backs the current file).
- Command Palette → **Go to Definition**.

Same-file jumps move the caret; cross-file jumps open the target file and reveal
the line.

## Tips

- The first file you open in a session is the only slow one — the server cold
  starts, then stays warm. Calypso also **pre-warms** the bridge when you open a
  project, so that first jump from amber to green is quicker.
- Switching tabs between supported files keeps the server warm — no re-start.
- If a server gets into a bad state, open the chip's panel and **Restart
  language servers**.

Hitting problems? See
[Troubleshooting → IntelliSense](/troubleshooting/#intellisense).
