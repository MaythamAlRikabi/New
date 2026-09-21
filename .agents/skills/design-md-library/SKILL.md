---
name: design-md-library
description: Local library of 74 DESIGN.md files — reverse-engineered design-system analyses (colors, typography, spacing, components, motion) of real product websites like Stripe, Linear, Apple, Vercel, Notion, and Airbnb. Use when the user asks to build or restyle a UI "like <brand>", wants a specific brand's look and feel, or asks what DESIGN.md files are available. Source: github.com/voltagent/awesome-design-md (MIT, unofficial fan-made analyses, not official brand assets).
---

# DESIGN.md Library

A local, offline copy of 74 DESIGN.md files: structured design-system breakdowns (color tokens, type scale, spacing, component patterns, motion) reverse-engineered from real product websites.

Each `DESIGN.md` is a plain-text design system document in the format Google Stitch and AI coding agents read directly — no Figma export or JSON schema needed.

## When to use

- User asks to build/redesign a page "in the style of <brand>" (e.g. "make this look like Stripe", "give me a Linear-style dashboard").
- User wants a specific, named brand aesthetic rather than a generic style.
- User asks what design references are available.

Not a substitute for `design-taste-frontend` or the other taste skills — those give general anti-slop judgment; this gives one exact, named brand's system when the user asks for that brand specifically.

## Available brands

```
airbnb, airtable, apple, binance, bmw, bmw-m, bugatti, cal, claude, clay,
clickhouse, cohere, coinbase, composio, cursor, dell-1996, elevenlabs, expo,
ferrari, figma, framer, hashicorp, hp, ibm, intercom, kraken, lamborghini,
linear.app, lovable, mastercard, meta, minimax, mintlify, miro, mistral.ai,
mongodb, nike, nintendo-2001, notion, nvidia, ollama, opencode.ai, pinterest,
playstation, posthog, raycast, renault, replicate, resend, revolut, runwayml,
sanity, sentry, shopify, slack, spacex, spotify, starbucks, stripe, supabase,
superhuman, tesla, theverge, together.ai, uber, vercel, vodafone, voltagent,
warp, webflow, wired, wise, x.ai, zapier
```

## How to use

Each brand's file lives at:

```
.agents/references/awesome-design-md/design-md/<brand>/DESIGN.md
```

1. Match the user's request to the closest brand slug above (fuzzy match is fine — "Linear" → `linear.app`, "X" / "Twitter" / "Grok" → `x.ai` may or may not fit, confirm with the user if ambiguous).
2. Read that `DESIGN.md` directly — it has YAML-ish sections for `colors`, `typography`, `spacing`, components, and motion.
3. Apply its tokens and rules when generating or restyling UI, the same way you'd apply a design system the user pasted in directly.
4. If the project doesn't already have a `DESIGN.md` at its root and the user wants this brand's system to stick for the whole project, copy the file there: `cp .agents/references/awesome-design-md/design-md/<brand>/DESIGN.md ./DESIGN.md` (ask first if a root `DESIGN.md` already exists, since it may belong to a different brand or be hand-authored).
5. These are unofficial, community-made reverse-engineered analyses, not the brand's real design tokens or licensed assets — say so if the user seems to think otherwise, and never present generated UI as affiliated with or endorsed by the real brand.

No brand match found → say so rather than inventing one; fall back to the general taste skills instead.
