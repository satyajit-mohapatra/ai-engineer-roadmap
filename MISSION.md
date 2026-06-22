# Mission: Become a Complete AI Engineer (roadmap.sh/ai-engineer)

> **Scope changed 2026-06-10.** Originally this mission was narrow — *Context & Harness
> Engineering for Claude Code* (see learning record 0003). The user chose to broaden it to
> the full [AI Engineer roadmap](https://roadmap.sh/ai-engineer): "cover all aspects from
> this page." The harness/context-engineering work is now an **applied/advanced track**
> within a larger curriculum, not the whole thing.
>
> **Reordered 2026-06-19.** The curriculum originally ran in write-order (harness track
> first, general fundamentals tacked on after), which read as random rather than basic→
> advanced. Renumbered into Foundations → APIs & Prompting → Applied Track (Context &
> Harness Engineering, lessons 9–21) → RAG Stack → Agents & Beyond. Added a new lesson on
> token economics & efficient prompting. See learning record 0004.

## Why
You work with Claude Code daily on a technical analysis codebase (Pine Script, Node.js,
options data). You've already gone deep on *using* and *engineering* an AI harness. Now you
want the full AI Engineer skill set — the ability to **build AI-powered applications** end to
end: pick and call models from any provider, do prompt engineering, build RAG pipelines over
your own data, stand up vector search, build agents that use tools, work with multimodal
models, and know when to fine-tune. The roadmap.sh/ai-engineer path is the target.

## Success looks like
- You can pick the right model for a task across providers (OpenAI, Anthropic, Google,
  open-source) and call its API directly
- You can tune inference (temperature, top-p, tokens) deliberately, not by superstition
- You can build a RAG pipeline: chunk → embed → store in a vector DB → retrieve → generate
- You can build an agent that uses tools / function calling, and reason about multi-agent setups
- You can work with embeddings and run semantic search over your own data
- You can use multimodal models (vision, image gen, speech) in an application
- You can judge RAG vs fine-tuning vs context engineering for a given problem
- You ship AI features safely (prompt injection, moderation, privacy)
- **(Applied Track, done)** You can diagnose why an agent fails and fix it at the right harness layer

## Constraints
- Already intermediate on prompting and Claude Code internals — don't re-teach Phase 1 basics
- Primary practical context: Claude Code + the TradingView/options repo (use it for examples
  where a realistic tie exists, but standalone subject coverage is the priority)
- Wants both knowledge AND hands-on skills — not just theory
- Hands-on examples may use Python or Node.js (the repo is Node-based)

## Out of scope
- Deep ML theory / training models from scratch (this is an *applied* AI engineering path)
- Math-heavy derivations of transformers (conceptual understanding is enough)

## Roadmap coverage map
See [reference/curriculum.html](reference/curriculum.html) for the full roadmap → lesson map.
