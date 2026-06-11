# UI 设计导航分类设计

## 目标

将现有“开发与设计”下的“UI设计”二级分类提升为独立一级分类“UI设计”，并按工具用途拆分为更容易浏览的二级分类。

## 数据结构

沿用现有 `NavGroup -> NavCategory -> NavLink` 结构，不修改组件、类型或渲染逻辑。

- 从 `categoryList` 删除原有单个“UI设计”分类。
- 将原有 20 个导航项完整迁移到 5 个新分类。
- 在 `NavData` 新增一级分组“UI设计”，图标使用 `Palette`。
- 从“开发与设计”的 `children` 中移除旧的“UI设计”引用。

## 分类映射

### 图片处理

- iLoveIMG
- Photopea
- 2026年4月免费抠图网站/App汇总
- TinyPNG

### Logo 与图标

- Logo.Surf
- IconKitchen
- RealFaviconGenerator
- Icon Maker by Raycast
- AI Icon Generator
- favicon.io
- Favicon.im

### UI 设计与生成

- Canva
- Lovart
- Ideogram
- v0 by Vercel
- Stitch

### 社交分享图

- tinyshots
- Free Open Graph Generator
- opengraph.design

### 主题与样式

- tweakcn

## 行为与兼容性

所有导航项的标题、图标、描述和链接保持不变。搜索仍通过 `getAllCategories` 遍历全部二级分类，因此无需额外适配。新一级分类将由现有侧边栏手风琴自动展示。

## 验证

- TypeScript 类型检查通过。
- Prettier 格式检查通过。
- Next.js 构建通过。
- 确认原有 20 个导航项无遗漏、无重复。
