# 模仿对象导航分类设计

## 目标

将“需求与灵感”下的“模仿对象”二级分类提升为独立一级分类“模仿对象”，并按产品类型将原有 37 个导航项拆分为 7 个二级分类。

## 数据结构

沿用现有 `NavGroup -> NavCategory -> NavLink` 结构，不修改类型、搜索、主内容区或侧边栏交互逻辑。

- 从 `categoryList` 删除原有单个“模仿对象”分类。
- 将原有 37 个导航项完整迁移到 7 个新分类。
- 从“需求与灵感”的 `children` 中移除“模仿对象”。
- 在 `NavData` 中新增独立一级分组“模仿对象”，放在“需求与灵感”之后。
- 一级分组图标使用 Lucide `Copy`，并在侧边栏图标映射中注册。

## 分类映射

### SaaS 案例展示

- MkSaaS Showcase
- ShipAny Showcase
- NEXTY.DEV Showcase

### AI 图片生成与编辑

- imgeditor.co(原nanobanana.ai)
- z-image.ai
- PixToArt
- HairTry
- Nano Banana 2&Pro + GPT Image 2 | Google Gemini 3 AI 图像编辑器
- NanoBnana AI 图像生成器 — 秒级文本转图像 | Nano AI
- GPT Image 2
- GPT Image 2: Free AI Image Generator & Photo Editor Online

### AI 视频生成与创作

- vmake.ai
- seedance2.ai
- seedance2.so
- seedance2video.io
- HappyHorse AI 视频生成器 — HappyHorse AI
- Happy Horse AI Video Generator | Text, Image & Video Edit
- ReelMind - 免费 AI 视频创作社区，创作 AI 视频并开源 AI 模型 | ReelMind

### AI 音乐与音频

- remusic.ai
- AI Song Generator
- MusicGPT
- OpenMusic AI
- AI Make Song

### 去水印与内容清理

- Gemini Watermark Cleaner
- Remover.video
- Pilio

### 综合 AI 创作平台

- Cutout.Pro
- flux-context.org
- flux-ai.io
- TopMediai – All-in-One AI Video, Music & Voiceover Platform
- visualgpt.io

### 内容、效率与营销工具

- Superpower ChatGPT
- Banana Prompts
- Brand Maker
- TikTok Comment Generator
- Huewrite - AI文本人性化工具 | 将AI转化为人类写作 | Hue Write
- SuperHumanizer: Humanize AI | 100% Free AI Humanizer

## 分类原则

每个导航项只出现一次。以单一媒介为核心的产品归入图片、视频或音乐分类；同时覆盖多种创作媒介的产品归入“综合 AI 创作平台”；案例集合和非创作型辅助工具分别归入“SaaS 案例展示”和“内容、效率与营销工具”。

## 行为与兼容性

所有导航项的 `title`、`icon`、`desc` 和 `link` 保持不变。搜索继续通过 `getAllCategories` 遍历全部二级分类。现有手风琴侧边栏和主内容区会自动使用新的分组结构。

## 验证

- 确认 37 个原有导航项均保留且各出现一次。
- 确认 7 个新二级分类均由新的“模仿对象”一级分组引用。
- 确认“需求与灵感”不再引用旧的“模仿对象”分类。
- 确认 `Copy` 图标已在侧边栏注册且不会回退为 `Compass`。
- 对改动文件运行 Prettier、TypeScript 类型检查和 Next.js 生产构建。
