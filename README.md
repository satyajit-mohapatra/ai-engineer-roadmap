# AI Engineering — Self-Study Workspace

A self-paced curriculum following the [roadmap.sh/ai-engineer](https://roadmap.sh/ai-engineer)
path, built and taught interactively with Matt Pocock's
[`/teach` skill](https://github.com/mattpocock/skills) for Claude Code.

Install the skill once:

```bash
npx skills add https://github.com/mattpocock/skills --skill teach
```

## Structure

| Path | What it is |
|---|---|
| [`index.html`](index.html) | Landing page — links to the curriculum, glossary, and key docs. |
| [`MISSION.md`](MISSION.md) | The learning goal, success criteria, and scope/constraints. Read this first. |
| [`RESOURCES.md`](RESOURCES.md) | Reference material and links used across lessons. |
| [`NOTES.md`](NOTES.md) | Living notes: user profile, preferences, curriculum status, session log. |
| [`reference/curriculum.html`](reference/curriculum.html) | Index of all lessons, grouped by phase. Open this to navigate. |
| [`reference/glossary.html`](reference/glossary.html) | Glossary of terms used across lessons. |
| [`lessons/`](lessons/) | Self-contained HTML lessons (0001–0030), each with a quiz and source links. |
| [`assets/progress.js`](assets/progress.js) | Tracks per-lesson completion in your browser's `localStorage` and renders progress. |
| `.github/workflows/deploy-pages.yml` | GitHub Actions workflow that deploys the site to GitHub Pages. |
| `learning-records/` | Personal session reflections — git-ignored, kept local only. |

## Curriculum

30 lessons, ordered basic to advanced:

- **Foundations (1–5)** — what an AI engineer is, how LLMs work, choosing models,
  inference parameters, token economics & efficient prompting.
- **APIs & Prompting (6–8)** — provider APIs, prompt engineering techniques, AI safety.
- **Applied Track · Context & Harness Engineering (9–21)** — the Claude Code harness
  specialization, recast as an advanced applied track: hooks, skills, CLAUDE.md,
  memory, MCP, context window management, subagents, loop engineering.
- **The RAG Stack (22–25)** — open-source models, embeddings, vector databases, RAG.
- **Agents & Beyond (26–30)** — agents & function calling, multimodal AI, the model
  provider landscape, fine-tuning, and AI dev tools (capstone).

Reordered 2026-06-19 from the original write-order (harness specialization first,
fundamentals tacked on after) into a genuine basic→advanced sequence. See
[`learning-records/0004-curriculum-reordered-basic-to-advanced.md`](learning-records/0004-curriculum-reordered-basic-to-advanced.md).

Open [`reference/curriculum.html`](reference/curriculum.html) in a browser to browse and
jump between lessons.

## How to use this

1. **Browse lessons** by opening any file in `lessons/` directly in a browser, or start
   from the curriculum index.
2. **Take a lesson**: read through the material, try the embedded examples, and answer
   the two quiz questions at the end of each lesson.
3. **Continue learning with Claude Code**: open this workspace in Claude Code and run
   the [`/teach`](https://github.com/mattpocock/skills) skill (install command above).
   It reads `MISSION.md` and `NOTES.md` to pick up where you left off, generates new
   lessons, and updates the curriculum index as you progress.
4. **Track progress — two layers**:
   - *Your study progress* is recorded automatically in your browser's `localStorage`
     (your local system cache). Finishing a lesson's quizzes marks it complete; the
     landing page and curriculum index show a progress bar and per-lesson checkmarks.
     Nothing is uploaded, and a **Reset progress** link clears it. It's per-browser,
     so progress doesn't sync across devices.
   - *Curriculum/authoring status* lives in `NOTES.md` so a new Claude Code session
     can resume seamlessly.

## Deploying as a static site

The whole workspace is plain HTML/CSS/JS with no build step, so it deploys as-is.
`index.html` at the repo root is the entry point and links out to the curriculum,
glossary, and docs.

### GitHub Pages (recommended)

A workflow at [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
publishes the site on every push to `master`. A [`.nojekyll`](.nojekyll) file at the
root tells Pages to serve the files as-is (no Jekyll processing). One-time setup:

1. Push this repo to GitHub (the workflow file must be on `master`).
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source = "GitHub Actions"**. (A `git push` alone can't flip this toggle.)
3. The next push to `master` runs the workflow and publishes to
   `https://satyajit-mohapatra.github.io/ai-engineer-roadmap/`. You can also trigger
   it manually from the **Actions** tab via *Run workflow*.

Alternatively, **Source = "Deploy from a branch"** → `master` / `/ (root)` works too,
since the site is static at the repo root.

### Cloudflare (alternative)

The included [`wrangler.toml`](wrangler.toml) configures it as a Worker serving static
assets from the repo root — deploy with `npx wrangler deploy` (not `wrangler pages
deploy`), from the CLI or the Cloudflare dashboard's Git integration.

## Notes

- Lessons are self-contained HTML files (dark theme, no build step) — just open them
  in a browser.
- `learning-records/` is excluded from version control (see `.gitignore`) since it
  contains personal reflections, not shareable lesson content.
