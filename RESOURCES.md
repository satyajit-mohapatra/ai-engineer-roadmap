# Resources

## Context Engineering

| Title | URL | Notes |
|-------|-----|-------|
| Context Engineering: The Next Frontier | https://www.deepset.ai/blog/context-engineering-the-next-frontier-beyond-prompt-engineering | Strong conceptual overview. write/select/compress/isolate framework. |
| Context Engineering from Prompts to Multi-Agent (arxiv) | https://arxiv.org/pdf/2603.09619 | Academic paper, good for formal mental models |
| LLM Context Problem: Strategies for 2026 | https://blog.logrocket.com/llm-context-problem-strategies-2026/ | Practical strategies: memory, relevance, scale |
| Context Engineering Guide 2026 | https://www.the-ai-corner.com/p/context-engineering-guide-2026 | Claude 4.6 specific patterns |

## Harness Engineering

| Title | URL | Notes |
|-------|-----|-------|
| Agent Harness Engineering (Addy Osmani) | https://addyosmani.com/blog/agent-harness-engineering/ | Best conceptual overview. Ratchet principle, Ralph Loops, multi-agent. |
| Claude Code Harness & Environment Engineering | https://hidekazu-konishi.com/entry/claude_code_harness_and_environment_engineering_guide.html | Practical Claude Code specifics |
| My Claude Code Setup: MCP, Hooks, Skills | https://okhlopkov.com/claude-code-setup-mcp-hooks-skills-2026/ | Real-world setup walkthrough |
| Harness Engineering site | https://harness-engineering.fr/en/ | Skills, Hooks, MCP, Subagents reference |
| Paradime: Complete Guide to Skills & MCP | https://www.paradime.io/guides/claude-code-skills-plugins-rules-guide | Comprehensive skills + MCP guide |
| Claude Code Architecture: Six Harness Layers | https://mer.vin/2026/05/claude-code-architecture-explained-six-harness-layers-beyond-the-llm/ | Architecture deep-dive |

## Token Compression Tools

| Title | URL | Notes |
|-------|-----|-------|
| Reducing Token Usage in Code Agents (RTK, Graphify, Caveman, LSP) | https://aalmada.github.io/posts/Reducing-Token-Usage-in-Code-Agents/ | Best practical overview. Covers all four tools with real savings numbers. |
| RTK GitHub | https://github.com/rtk-ai/rtk | Source and installation for Rust Token Killer |
| RTK official site | https://www.rtk-ai.app/ | Setup guide, supported commands, config reference |
| Graphify | https://graphify.net/ | AST-level code knowledge graph for AI coding assistants |
| LLMLingua arXiv (LongLLMLingua) | https://arxiv.org/pdf/2310.06839 | Microsoft Research — surgical token removal for RAG contexts |
| Context Engineering Tools 2026 | https://techsy.io/en/blog/best-context-engineering-tools | 8 tools overview including LLMLingua, RTK, Repomix |
| Repomix | https://github.com/yamadashy/repomix | Pack repos into LLM-optimized single-file format |

## Tool-Agnostic Harness Engineering

| Title | URL | Notes |
|-------|-----|-------|
| Cursor Rules Docs | https://cursor.com/docs/context/rules | Official .mdc format, frontmatter fields, activation modes |
| TECHSY — Cursor Rules Guide 2026 | https://techsy.io/en/blog/cursor-rules-guide | Practical guide with glob triggers and always-on rules |
| GitHub Docs — Copilot Custom Instructions | https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot | Repo-wide and path-specific instruction files |
| VS Code Docs — Custom Instructions | https://code.visualstudio.com/docs/agent-customization/custom-instructions | MCP in VS Code (mcp.json, "servers" key, agent mode only) |
| Windsurf Docs — Cascade Memories | https://docs.windsurf.com/windsurf/cascade/memories | Automatic memory vs. .windsurfrules rules |
| Aider — Coding Conventions | https://aider.chat/docs/usage/conventions.html | CONVENTIONS.md, --read flag, .aider.conf.yml |
| Augment Code — AGENTS.md Guide 2026 | https://www.augmentcode.com/guides/how-to-build-agents-md | Best guide for the cross-tool AGENTS.md standard |
| arXiv — Configuring Agentic AI Coding Tools | https://arxiv.org/pdf/2602.14690 | Research study: cross-tool config patterns across 2,923 repos |
| remoet.dev — MCP in Claude, Cursor, Windsurf | https://www.remoet.dev/blog/how-to-set-up-mcp-server-claude-cursor-windsurf | Side-by-side MCP config for three tools |
| Lushbinary — AI Coding Agents Comparison 2026 | https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/ | Feature matrix: pricing, hooks, MCP, memory across tools |

## Loop Engineering

| Title | URL | Notes |
|-------|-----|-------|
| Addy Osmani — Loop Engineering | https://addyosmani.com/blog/loop-engineering/ | The defining post. Six components, Ralph Wiggum failure mode, safeguards. |
| Addy Osmani — Loop Engineering (Substack) | https://addyo.substack.com/p/loop-engineering | Same content, newsletter format |
| cobusgreyling/loop-engineering | https://github.com/cobusgreyling/loop-engineering | Practical patterns repo: starters, loop-init, loop-audit, loop-cost, six production patterns |
| Cobus Greyling — Loop Engineering Playbook | https://cobusgreyling.medium.com/loop-engineering-playbook-4460e01e88d8 | Where loops live, how to run your first one |
| Lushbinary — Loop Engineering Guide for AI Agents | https://lushbinary.com/blog/loop-engineering-ai-coding-agents-guide/ | Overview with phased rollout (L1/L2/L3) detail |
| explainx.ai — Loop Engineering for Coding Agents | https://explainx.ai/blog/loop-engineering-coding-agents-claude-code-guide-2026 | Claude Code-specific walkthrough |

## Community

| Where | URL | Notes |
|-------|-----|-------|
| r/ClaudeAI | https://www.reddit.com/r/ClaudeAI/ | Active community, real-world usage patterns |
| Anthropic Discord | https://discord.gg/anthropic | Official, good for harness/skills questions |
