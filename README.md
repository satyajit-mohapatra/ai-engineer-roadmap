# AI Engineering — Self-Study Workspace

A self-paced curriculum following the [roadmap.sh/ai-engineer](https://roadmap.sh/ai-engineer)
path, built and taught interactively with Claude Code's `/teach` skill.

## Structure

| Path | What it is |
|---|---|
| [`index.html`](index.html) | Landing page — links to the curriculum, glossary, and key docs. |
| [`MISSION.md`](MISSION.md) | The learning goal, success criteria, and scope/constraints. Read this first. |
| [`RESOURCES.md`](RESOURCES.md) | Reference material and links used across lessons. |
| [`NOTES.md`](NOTES.md) | Living notes: user profile, preferences, curriculum status, session log. |
| [`reference/curriculum.html`](reference/curriculum.html) | Index of all lessons, grouped by phase. Open this to navigate. |
| [`reference/glossary.html`](reference/glossary.html) | Glossary of terms used across lessons. |
| [`lessons/`](lessons/) | Self-contained HTML lessons (0001–0029), each with a quiz and source links. |
| `learning-records/` | Personal session reflections — git-ignored, kept local only. |

## Curriculum

29 lessons in two phases:

- **Phase 1 (1–13)** — Context & harness engineering for Claude Code: hooks, skills,
  CLAUDE.md, memory, MCP, context window management, subagents, loop engineering.
- **Phase 2 (14–29)** — The rest of the AI Engineer roadmap: how LLMs work, choosing
  models, inference parameters, provider APIs, prompt engineering, AI safety,
  open-source models, embeddings, vector databases, RAG, agents & function calling,
  multimodal AI, the model provider landscape, fine-tuning, and AI dev tools.

Open [`reference/curriculum.html`](reference/curriculum.html) in a browser to browse and
jump between lessons.

## How to use this

1. **Browse lessons** by opening any file in `lessons/` directly in a browser, or start
   from the curriculum index.
2. **Take a lesson**: read through the material, try the embedded examples, and answer
   the two quiz questions at the end of each lesson.
3. **Continue learning with Claude Code**: open this workspace in Claude Code and run
   the `/teach` skill. It reads `MISSION.md` and `NOTES.md` to pick up where you left
   off, generates new lessons, and updates the curriculum index as you progress.
4. **Track progress**: `NOTES.md` records curriculum status and session history so a
   new session can resume seamlessly.

## Deploying as a static site

The whole workspace is plain HTML/CSS with no build step, so it deploys as-is to
Cloudflare. The included [`wrangler.toml`](wrangler.toml) configures it as a Worker
serving static assets from the repo root — the deploy command is `npx wrangler deploy`
(not `wrangler pages deploy`). This works both from the Cloudflare dashboard's Git
integration (deploy command auto-detected as `npx wrangler deploy`) and from the CLI.

`index.html` at the repo root is the entry point and links out to the curriculum,
glossary, and docs.

## Notes

- Lessons are self-contained HTML files (dark theme, no build step) — just open them
  in a browser.
- `learning-records/` is excluded from version control (see `.gitignore`) since it
  contains personal reflections, not shareable lesson content.
