# Inspiration Target Categories Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote “模仿对象” to a standalone top-level navigation group and distribute its 37 links across seven product-type categories.

**Architecture:** Keep the existing `NavGroup -> NavCategory -> NavLink` model unchanged. Replace the single `模仿对象` category in `categoryList` with seven categories, update `NavData`, and register the new `Copy` top-level icon in the sidebar’s existing icon map.

**Tech Stack:** TypeScript, React, Next.js, lucide-react, pnpm, Prettier

---

### Task 1: Restructure inspiration target navigation data

**Files:**
- Modify: `config/site.ts`

- [ ] **Step 1: Verify the desired category structure is absent**

Run:

```bash
node - <<'NODE'
const fs = require("fs")
const source = fs.readFileSync("config/site.ts", "utf8")
const categories = [
  "SaaS 案例展示",
  "AI 图片生成与编辑",
  "AI 视频生成与创作",
  "AI 音乐与音频",
  "去水印与内容清理",
  "综合 AI 创作平台",
  "内容、效率与营销工具"
]
const implemented =
  categories.every((title) => source.includes(`title: "${title}"`)) &&
  source.includes('title: "模仿对象",\n    icon: "Copy"')
if (implemented) process.exit(0)
console.error("Inspiration target category structure is not implemented")
process.exit(1)
NODE
```

Expected: exit code 1 with `Inspiration target category structure is not implemented`.

- [ ] **Step 2: Replace the original category with seven categories**

In `categoryList`, replace the single `title: "模仿对象"` object with these categories and move each complete existing `NavLink` object without changing its fields:

```text
SaaS 案例展示:
  MkSaaS Showcase
  ShipAny Showcase
  NEXTY.DEV Showcase

AI 图片生成与编辑:
  imgeditor.co(原nanobanana.ai)
  z-image.ai
  PixToArt
  HairTry
  Nano Banana 2&Pro + GPT Image 2 | Google Gemini 3 AI 图像编辑器
  NanoBnana AI 图像生成器 — 秒级文本转图像 | Nano AI
  GPT Image 2
  GPT Image 2: Free AI Image Generator & Photo Editor Online

AI 视频生成与创作:
  vmake.ai
  seedance2.ai
  seedance2.so
  seedance2video.io
  HappyHorse AI 视频生成器 — HappyHorse AI
  Happy Horse AI Video Generator | Text, Image & Video Edit
  ReelMind - 免费 AI 视频创作社区，创作 AI 视频并开源 AI 模型 | ReelMind

AI 音乐与音频:
  remusic.ai
  AI Song Generator
  MusicGPT
  OpenMusic AI
  AI Make Song

去水印与内容清理:
  Gemini Watermark Cleaner
  Remover.video
  Pilio

综合 AI 创作平台:
  Cutout.Pro
  flux-context.org
  flux-ai.io
  TopMediai – All-in-One AI Video, Music & Voiceover Platform
  visualgpt.io

内容、效率与营销工具:
  Superpower ChatGPT
  Banana Prompts
  Brand Maker
  TikTok Comment Generator
  Huewrite - AI文本人性化工具 | 将AI转化为人类写作 | Hue Write
  SuperHumanizer: Humanize AI | 100% Free AI Humanizer
```

- [ ] **Step 3: Add the top-level inspiration target group**

Remove `"模仿对象"` from the `需求与灵感` call to `pick`. Insert this group immediately after `需求与灵感`:

```typescript
{
  title: "模仿对象",
  icon: "Copy",
  children: pick(
    "SaaS 案例展示",
    "AI 图片生成与编辑",
    "AI 视频生成与创作",
    "AI 音乐与音频",
    "去水印与内容清理",
    "综合 AI 创作平台",
    "内容、效率与营销工具"
  )
}
```

Update the nearby top-level grouping comment from 30 categories in 7 groups to 36 categories in 8 groups.

- [ ] **Step 4: Verify the new structure is present**

Run the Step 1 command again.

Expected: exit code 0.

- [ ] **Step 5: Verify all 37 links are retained once with unchanged fields**

Run:

```bash
node - <<'NODE'
const { execFileSync } = require("child_process")
const fs = require("fs")
const source = fs.readFileSync("config/site.ts", "utf8")
const baseline = execFileSync("git", ["show", "HEAD:config/site.ts"], { encoding: "utf8" })
const titles = [
  "MkSaaS Showcase",
  "ShipAny Showcase",
  "NEXTY.DEV Showcase",
  "imgeditor.co(原nanobanana.ai)",
  "z-image.ai",
  "PixToArt",
  "Gemini Watermark Cleaner",
  "remusic.ai",
  "vmake.ai",
  "seedance2.ai",
  "seedance2.so",
  "seedance2video.io",
  "Superpower ChatGPT",
  "Banana Prompts",
  "Cutout.Pro",
  "AI Song Generator",
  "flux-context.org",
  "flux-ai.io",
  "Brand Maker",
  "Remover.video",
  "TikTok Comment Generator",
  "MusicGPT",
  "HairTry",
  "HappyHorse AI 视频生成器 — HappyHorse AI",
  "Happy Horse AI Video Generator | Text, Image & Video Edit",
  "ReelMind - 免费 AI 视频创作社区，创作 AI 视频并开源 AI 模型 | ReelMind",
  "Pilio",
  "Nano Banana 2&Pro + GPT Image 2 | Google Gemini 3 AI 图像编辑器",
  "NanoBnana AI 图像生成器 — 秒级文本转图像 | Nano AI",
  "GPT Image 2",
  "GPT Image 2: Free AI Image Generator & Photo Editor Online",
  "TopMediai – All-in-One AI Video, Music & Voiceover Platform",
  "OpenMusic AI",
  "AI Make Song",
  "Huewrite - AI文本人性化工具 | 将AI转化为人类写作 | Hue Write",
  "SuperHumanizer: Humanize AI | 100% Free AI Humanizer",
  "visualgpt.io"
]

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const getObject = (text, title) => {
  const pattern = new RegExp(
    `      \\{\\n        title: "${escapeRegExp(title)}",[\\s\\S]*?\\n      \\}`
  )
  const match = text.match(pattern)
  if (!match) throw new Error(`Object not found: ${title}`)
  return match[0]
}

for (const title of titles) {
  const count = source.split(`title: "${title}"`).length - 1
  if (count !== 1) throw new Error(`${title}: expected once, found ${count}`)
  if (getObject(source, title) !== getObject(baseline, title)) {
    throw new Error(`${title}: NavLink fields changed during migration`)
  }
}
console.log("All 37 inspiration target links are present exactly once with unchanged fields")
NODE
```

Expected: `All 37 inspiration target links are present exactly once with unchanged fields`.

- [ ] **Step 6: Commit the configuration change**

```bash
git add config/site.ts
git commit -m "feat: reorganize inspiration target navigation"
```

Expected: the commit contains only `config/site.ts`.

### Task 2: Register the icon and validate the application

**Files:**
- Modify: `components/sidebar.tsx`
- Verify: `config/site.ts`

- [ ] **Step 1: Verify the Copy icon is not registered**

Run:

```bash
node - <<'NODE'
const fs = require("fs")
const source = fs.readFileSync("components/sidebar.tsx", "utf8")
const importRegistered = /import\s*\{[\s\S]*?\bCopy,[\s\S]*?\}\s*from "lucide-react"/.test(source)
const mapRegistered = /const groupIcons[\s\S]*?\bCopy,/.test(source)
if (importRegistered && mapRegistered) process.exit(0)
console.error("Copy icon is not registered")
process.exit(1)
NODE
```

Expected: exit code 1 with `Copy icon is not registered`.

- [ ] **Step 2: Register the Copy icon**

Add `Copy` to the existing `lucide-react` import and the existing `groupIcons` object:

```typescript
import {
  // existing icons
  Copy
} from "lucide-react"

const groupIcons: Record<string, LucideIcon> = {
  // existing mappings
  Copy
}
```

Follow the existing formatting and ordering style; do not alter sidebar behavior.

- [ ] **Step 3: Verify icon registration**

Run the Step 1 command again.

Expected: exit code 0.

- [ ] **Step 4: Run scoped formatting**

Run:

```bash
pnpm exec prettier --check config/site.ts components/sidebar.tsx
```

Expected: `All matched files use Prettier code style!`

- [ ] **Step 5: Run TypeScript checks**

Run:

```bash
pnpm typecheck
```

Expected: exit code 0.

- [ ] **Step 6: Build the Next.js application**

Run:

```bash
pnpm build
```

Expected: exit code 0 and a successful production build.

- [ ] **Step 7: Review the final diff**

Run:

```bash
git diff --check HEAD~1
git diff --stat HEAD~1
git status --short
```

Expected: no whitespace errors; only `components/sidebar.tsx` remains uncommitted before the icon commit.

- [ ] **Step 8: Commit the icon integration**

```bash
git add components/sidebar.tsx
git commit -m "fix: register inspiration target icon"
```

Expected: the commit contains only `components/sidebar.tsx`, and the worktree is clean.
