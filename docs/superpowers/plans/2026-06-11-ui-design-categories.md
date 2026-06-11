# UI Design Categories Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote UI design to its own top-level navigation group and split its 20 links into five purpose-based second-level categories.

**Architecture:** Keep the existing `NavGroup -> NavCategory -> NavLink` model unchanged. Replace the single `UI设计` category in `categoryList` with five categories, then add a dedicated `UI设计` entry to `NavData` and remove the old reference from `开发与设计`.

**Tech Stack:** TypeScript, Next.js, pnpm, Prettier

---

### Task 1: Restructure the UI design navigation data

**Files:**
- Modify: `config/site.ts:457`

- [ ] **Step 1: Verify the desired structure is absent**

Run:

```bash
node -e 'const fs=require("fs");const s=fs.readFileSync("config/site.ts","utf8");const names=["图片处理","Logo 与图标","UI 设计与生成","社交分享图","主题与样式"];if(names.every(n=>s.includes(`title: \"${n}\"`))&&s.includes(`title: \"UI设计\",\\n    icon: \"Palette\"`))process.exit(0);console.error("UI design category structure is not implemented");process.exit(1)'
```

Expected: exit code 1 with `UI design category structure is not implemented`.

- [ ] **Step 2: Replace the original category with five categories**

In `categoryList`, replace the single `title: "UI设计"` object with:

```typescript
{
  title: "图片处理",
  items: [iLoveIMG, Photopea, 2026年4月免费抠图网站/App汇总, TinyPNG]
},
{
  title: "Logo 与图标",
  items: [Logo.Surf, IconKitchen, RealFaviconGenerator, Icon Maker by Raycast, AI Icon Generator, favicon.io, Favicon.im]
},
{
  title: "UI 设计与生成",
  items: [Canva, Lovart, Ideogram, v0 by Vercel, Stitch]
},
{
  title: "社交分享图",
  items: [tinyshots, Free Open Graph Generator, opengraph.design]
},
{
  title: "主题与样式",
  items: [tweakcn]
}
```

Move the complete existing `NavLink` objects without changing their fields.

- [ ] **Step 3: Add the top-level UI design group**

In `NavData`, remove `"UI设计"` from the `开发与设计` call to `pick`, then insert:

```typescript
{
  title: "UI设计",
  icon: "Palette",
  children: pick("图片处理", "Logo 与图标", "UI 设计与生成", "社交分享图", "主题与样式")
}
```

Place it immediately after `开发与设计`.

- [ ] **Step 4: Verify the new structure is present**

Run the Step 1 command again.

Expected: exit code 0.

- [ ] **Step 5: Verify all 20 links are retained once**

Run:

```bash
node - <<'NODE'
const fs = require("fs")
const source = fs.readFileSync("config/site.ts", "utf8")
const titles = [
  "iLoveIMG", "Photopea", "Canva", "Lovart", "2026年4月免费抠图网站/App汇总",
  "TinyPNG", "Logo.Surf", "IconKitchen", "RealFaviconGenerator", "Icon Maker by Raycast",
  "AI Icon Generator", "tinyshots", "favicon.io", "tweakcn", "Favicon.im", "Ideogram",
  "v0 by Vercel", "Stitch", "Free Open Graph Generator", "opengraph.design"
]
for (const title of titles) {
  const count = source.split(`title: "${title}"`).length - 1
  if (count !== 1) throw new Error(`${title}: expected once, found ${count}`)
}
console.log("All 20 UI design links are present exactly once")
NODE
```

Expected: `All 20 UI design links are present exactly once`.

### Task 2: Validate the application

**Files:**
- Verify: `config/site.ts`

- [ ] **Step 1: Run formatting check**

Run:

```bash
pnpm exec prettier --check config/site.ts
```

Expected: `All matched files use Prettier code style!`

- [ ] **Step 2: Run TypeScript checks**

Run:

```bash
pnpm typecheck
```

Expected: exit code 0.

- [ ] **Step 3: Build the Next.js application**

Run:

```bash
pnpm build
```

Expected: exit code 0 and a successful production build.

- [ ] **Step 4: Review the final diff**

Run:

```bash
git diff --check
git diff -- config/site.ts
```

Expected: no whitespace errors; the diff only reorganizes UI design navigation data while preserving unrelated working-tree changes.
