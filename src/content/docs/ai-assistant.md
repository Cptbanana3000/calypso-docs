---
title: AI assistant
description: Calypso's built-in AI — bring your own key (Anthropic, DeepSeek, or OpenAI), chat about your code, run selection actions, and let the agent explore and edit your project.
---

import { Steps } from '@astrojs/starlight/components';

Calypso has a built-in AI assistant that helps you read, write, and understand
code without leaving the editor. It is **bring-your-own-key**: you supply an API
key from a provider you choose, and Calypso talks to that provider **directly
from your device**. There is no Calypso account and no Calypso server in the
middle — your key, prompts, and the responses never pass through us.

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

## AI chat

Open a full conversation from the **✨ AI** menu → **Open AI chat** (or the
Command Palette → **AI Chat**). Chat is multi-turn and remembers the conversation
for the session.

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

## Agent mode

The **agent** turns chat into a hands-on coding assistant that explores your
project and edits it for you. Turn on the **Agent** toggle in chat, or pick
**Ask the agent** from the **✨ AI** menu.

The agent works in a loop using tools, all **confined to the project you have
open**:

- **list / search / read** your project files to understand the codebase before
  it acts — it verifies by reading rather than guessing.
- **write** — create a new file or change an existing one.

Each step shows up live in the chat transcript so you can see exactly what it's
doing.

### Approving edits

When the agent wants to create or change a file, it shows you the change as a
**red/green diff**:

- **By default, it waits for your approval** — review the diff and tap **Approve**
  or **Reject**. Rejecting tells the agent to try a different approach.
- Turn on **Edit automatically** (the toggle in chat) to let edits apply without
  stopping to ask. You **still see every diff** — it just doesn't pause for each
  one. Useful for longer, hands-off coding sessions.

:::caution[Review AI changes]
AI-generated code can be wrong, incomplete, or insecure. Review changes,
especially with **Edit automatically** on, and keep your work in Git so you can
always undo. See the [Terms of Service](/terms-of-service/#ai-assistant).
:::

## Choosing a provider and model

Switch provider and model in two places:

- **Settings → AI Assistant** — the home for keys and the default model.
- **The model chip in chat** — switch on the fly without leaving the
  conversation.

The picker lists each provider you've configured and the models that key can
access, with commonly used models first. Calypso **never silently switches your
model** — what you pick is what it uses, so there are no surprise charges from a
pricier model.

## Privacy & cost

- **Your key and conversations stay on your device.** Keys live in the secure
  keystore; conversations exist only in memory for the session. Calypso never
  receives any of it.
- **What's sent goes only to your provider** — your prompt, plus any code or
  files you attach (or that the agent reads from your open project), and the
  provider returns the response. Nothing is sent until you trigger an action.
- **Usage is billed to your own provider account** at their prices. The in-chat
  token counter helps you keep track.

Full detail is in the [Privacy Policy](/privacy-policy/#ai-assistant-optional).

## Troubleshooting

Hitting an error message? See
[Troubleshooting → AI assistant](/troubleshooting/#ai-assistant).
