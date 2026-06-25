---
title: AI assistant
description: Calypso's built-in AI — bring your own key (Anthropic, DeepSeek, or OpenAI), chat about your code, and let the agent explore, edit, run commands, and commit your project.
---

import { Steps } from '@astrojs/starlight/components';

Calypso has a built-in AI assistant that helps you read, write, run, and
understand code without leaving the editor. It is **bring-your-own-key**: you
supply an API key from a provider you choose, and Calypso talks to that provider
**directly from your device**. There is no Calypso account and no Calypso server
in the middle — your key, prompts, and the responses never pass through us.

Supported providers today:

- [Anthropic](https://www.anthropic.com) (Claude)
- [DeepSeek](https://www.deepseek.com)
- [OpenAI](https://openai.com) (GPT)

:::note[Why bring-your-own-key?]
You pay your provider directly for exactly what you use, at their prices, with no
markup and no subscription to Calypso. Your key is stored only on your device.
:::

## Add an API key

<Steps>

1. **Get a key from a provider.** Create one in your provider's dashboard:
   [Anthropic](https://console.anthropic.com/settings/keys),
   [DeepSeek](https://platform.deepseek.com/api_keys), or
   [OpenAI](https://platform.openai.com/api-keys).

2. **Open Settings → AI Assistant.** Reach Settings from the home screen, or tap
   **Open AI Settings** on the AI chat screen before you've added a key.

3. **Pick the provider and paste your key.** Calypso verifies the key with the
   provider (by listing the models it can access). A valid key is saved; an
   invalid one is rejected so you find out immediately.

</Steps>

You can add **one key per provider** and switch between them at any time. Each key
is stored in your device's secure keystore (Android Keystore, via encrypted
on-device storage) and is sent only to its own provider — never to us. See the
[Privacy Policy](/privacy-policy/#ai-assistant-optional) for the full detail of
what is sent and when.

## Selection actions

Select code in the editor, then tap the **✨ AI** button on the accessory bar (or
use the Command Palette) and choose:

- **Explain selection** — a clear, brief explanation of what the code does.
- **Fix selection** — find and fix a bug in the selected code.
- **Improve selection** — make it more readable and idiomatic.

The result opens in chat, where you can follow up or apply any code block to your
file.

## Edit a file with AI

From the **✨ AI** menu, choose **Edit file with AI…**, describe the change you
want in plain language, and Calypso proposes an edit to the **open file**. You
**review the change before anything is applied** — nothing is written until you
accept it.

## Fix with AI

When code you run hits an error, you don't have to copy-paste it. A **Fix with
AI** button appears:

- on the **Output panel** when a run (on-device or Termux) fails, and
- on the **preview Console** when a page logs an error.

Tap it and the agent opens with the error already filled in and starts
diagnosing — it reads the relevant files, finds the cause, and proposes a fix you
review like any other agent edit. (There are also **Copy** buttons on both, if
you'd rather grab the output yourself.)

## AI chat

Open a full conversation from the **✨ AI** menu → **Open AI chat** (or the
Command Palette → **AI Chat**). Chat is multi-turn and supports markdown,
including syntax-highlighted code blocks you can copy or apply to a file.

Two toggles let you give the assistant context about your project:

- **Include file** — attach the file you currently have open to your message.
- **Search project** — Calypso finds the files most relevant to your question and
  attaches them automatically, so you don't have to hunt for them.

Other things to know:

- **Model chip** — the chip in the input bar shows the active model; tap it to
  switch provider or model right from chat (see [Choosing a model](#choosing-a-provider-and-model)).
- **Token counter** — the header shows the tokens used this session, so you can
  keep an eye on cost.
- **Reasoning** — with a reasoning model (e.g. DeepSeek's reasoner), the model's
  thinking streams into a collapsible block above the answer.
- **Stop** — cancel a response in progress with the stop button.
- **Report** — flag an AI response (the reason and an excerpt are sent to our
  error-reporting service, only when you tap it).

### Chat history

Conversations are **saved automatically and persist across app restarts**. The
chat bar has:

- a **history** button (clock icon) — a list of your past conversations, titled
  from the first message; tap one to reopen it (the full transcript, agent steps
  included), or delete it.
- a **new chat** button (＋) — start a fresh conversation; the current one is kept
  in history.

History is stored only on your device.

## Agent mode

The **agent** turns chat into a hands-on coding assistant that explores your
project, edits it, runs commands, and manages version control for you. Turn on the
**Agent** toggle in chat, or pick **Ask the agent** from the **✨ AI** menu.

The agent works in a loop, reading tool results and deciding what to do next —
everything **confined to the project you have open**. Depending on your setup, it
can:

- **list / search / read** your project files to understand the codebase before
  it acts — it verifies by reading rather than guessing.
- **write / append** — create or change a file (large files are written in
  pieces so they don't get cut off).
- **run commands** — install dependencies, build, run tests (when Termux is set
  up — see [Running commands](#running-commands)).
- **source control** — commit and push (when the project is a Git repo — see
  [Source control](#source-control)).
- **remember** — save a durable fact to the project's memory (see
  [Project memory](#project-memory)).

Each step shows up live in the chat transcript so you can see exactly what it's
doing.

### Approving edits

When the agent wants to create or change a file, it shows you the change as a
**red/green diff**:

- **By default, it waits for your approval** — review the diff and tap **Approve**
  or **Reject**. Rejecting tells the agent to try a different approach.
- Turn on **Edit automatically** (in the agent **Options** menu) to let edits
  apply without stopping to ask. You **still see every diff** — it just doesn't
  pause for each one. Useful for longer, hands-off sessions.

:::caution[Review AI changes]
AI-generated code can be wrong, incomplete, or insecure. Review changes,
especially with **Edit automatically** on, and keep your work in Git so you can
always undo. See the [Terms of Service](/terms-of-service/#ai-assistant).
:::

### Plan mode

For a bigger or multi-file change, turn on **Plan** (in the agent **Options**
menu). The agent then **explores read-only and presents a written plan** — the
files it intends to change and why — **without editing anything** (it isn't given
the write tools). When you're happy, tap **Approve & build** and it implements the
plan.

If the request spans several independent features, the agent lays out an order,
recommends where to start, and builds **one feature at a time** so you can review
between them (reply "continue" for the next, or "build the rest").

### Running commands

When [Termux](/termux-setup/) is set up and your project lives in a
Termux-reachable location, the agent can **run shell commands** — `npm install`,
build scripts, tests, generators — **read the output, and keep going** (fix an
error, re-run, verify). This is the real install → write → run → fix loop, on
your phone.

- Each command is shown as `$ <command>` and **you approve it** before it runs
  (or it runs automatically with **Edit automatically** on).
- Output **streams into the step live** as the command runs.
- Commands are non-interactive (no REPLs/prompts that wait for input).

### Source control

When your project is a Git repository, the agent can do source control in-chat —
just ask it to *"commit and push"*:

- **`git status` / `git diff`** (read-only) so it knows what changed and can write
  an accurate message.
- **commit** — stages everything and commits with a clear, AI-written message
  (you approve it).
- **push** — publishes to the remote. **A push always asks for confirmation**,
  even with Edit automatically on, because it's hard to undo.

It uses the same credentials and identity as the manual [Git workflow](/git-workflow/)
— the agent never sees your token. If your name/email isn't set, it asks you for
them in chat and configures it, rather than sending you to settings.

## Project memory

Each project has a **persistent memory** — a short note (stack, conventions, where
key things live, your preferences) that is **added to every chat and agent run**,
so even a brand-new conversation already has context.

- Edit it directly from the **note icon** in the chat bar.
- The agent can add to it: tell it *"remember we use pnpm, not npm"* and it saves
  a one-line fact via its **remember** tool.

Memory is per-project and stored only on your device.

## Choosing a provider and model

Switch provider and model in two places:

- **Settings → AI Assistant** — the home for keys and the default model.
- **The model chip in chat** — switch on the fly without leaving the
  conversation.

The picker lists each provider you've configured and the models that key can
access, with commonly used models first. Calypso **never silently switches your
model** — what you pick is what it uses, so there are no surprise charges from a
pricier model.

:::tip[Big edits on a capped model]
Some models (e.g. DeepSeek) cap how much they can output at once. Calypso works
around it by writing large files in pieces, but for very large single-file
changes a model with a bigger output limit (e.g. a Claude model) has more room.
:::

## Privacy & cost

- **Your key stays on your device.** Keys live in the secure keystore. Calypso
  never receives them.
- **Conversations and project memory are stored locally on your device** (so chat
  history survives restarts) — they are never sent to Calypso.
- **What's sent goes only to your provider** — your prompt, plus any code, files,
  command output, or memory the assistant uses from your open project, and the
  provider returns the response. Nothing is sent until you trigger an action.
- **Usage is billed to your own provider account** at their prices. The in-chat
  token counter helps you keep track.

Full detail is in the [Privacy Policy](/privacy-policy/#ai-assistant-optional).

## Troubleshooting

Hitting an error message? See
[Troubleshooting → AI assistant](/troubleshooting/#ai-assistant).
