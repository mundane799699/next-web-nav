export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "独立掘金网",
  url: "https://indiegolden.com",
  description:
    "独立掘金网 - 独立开发者出海导航站，精选需求挖掘、SEO优化、外链建设、UI设计、代码模板、API供应商、支付接入等实用工具与资源，助你从零打造盈利的独立产品。",
  mainNav: [],
  links: {
    twitter: "https://x.com/mundane799699"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
  /** 提示 */
  tip?: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "需求挖掘",
    items: [
      {
        title: "网站出海每日分享：找词找站找需求",
        icon: "/icons/droidHZ.png",
        desc: "词找站、站找词、站找站",
        link: "https://mp.weixin.qq.com/s/fbCxrI2JZGoraXpOgNQeKA"
      },
      {
        title: "打洞周报第21期-假期总结",
        icon: "/icons/lixiang.png",
        desc: "文章分享了怎么通过站找站来挖掘需求",
        link: "https://mp.weixin.qq.com/s/uLK7umg6-9qz2lSdPiTu5A"
      },
      {
        title: "Google 趋势",
        icon: "/icons/trends.google.com-favicon-large.ico",
        desc: "Google 趋势是一个免费的工具，可以让你了解当前的热门搜索和趋势。",
        link: "https://trends.google.com/trends/"
      },
      {
        title: "Traffic.cv",
        icon: "/icons/traffic.cv-favicon-large.ico",
        desc: "Traffic.cv is a free website traffic checker that allows you to check the traffic of any website. Get traffic volume, sources, trends, top keywords and more.",
        link: "https://traffic.cv"
      },
      {
        title: "Products by Indie Hackers",
        icon: "/icons/www.indiehackers.com-favicon-large.ico",
        desc: "Discover hundreds of businesses, startups, and side projects that are making money online, and learn how they got to where they are today.",
        link: "https://www.indiehackers.com/products"
      },
      {
        title: "boringcashcow",
        icon: "/icons/boringcashcow.com-favicon-large.ico",
        desc: "Find out about boring businesses that make a lot of money quietly. Learn how they succeed and build your own.",
        link: "https://boringcashcow.com"
      },

      {
        title: "TrustMRR",
        icon: "/icons/trustmrr.com-favicon-large.ico",
        desc: "The database of verified startup revenues. Browse Stripe-verified MRR and revenue from real startups. Prove your revenue publicly.",
        link: "https://trustmrr.com"
      },
      {
        title: "Chrome-Stats",
        icon: "/icons/chrome-stats.com-favicon-large.ico",
        desc: "All-in-one platform to grow your Chrome extensions, Android apps, and other other add-ons. Download current and past extensions, access historical stats, and run competitive analysis for extensions and apps.",
        link: "https://chrome-stats.com"
      },
      {
        title: "AppSumo",
        icon: "/icons/appsumo.com-favicon-large.ico",
        desc: "Top software deals for entrepreneurs at incredible prices. Discover the latest productivity, marketing, and content tools for your business with no monthly fees.",
        link: "https://appsumo.com"
      },
      {
        title: "AI Graveyard",
        icon: "/icons/dang.ai-favicon-large.ico",
        desc: "The AI industry moves fast, here's a list of legacy AI tools and services that didn't make the cut. A tribute to AI and creators building in the AI space.",
        link: "https://dang.ai/ai-graveyard"
      },
      {
        title: "ramen.tools",
        icon: "/icons/ramen.tools-favicon-large.ico",
        desc: "See the tools other indie makers, solopreneurs and startups are using to build, launch and promote their products. More than 4000+ tech stacks. Join us, it's free.",
        link: "https://ramen.tools"
      }
    ]
  },
  {
    title: "社区",
    items: [
      {
        title: "Hugging Face",
        icon: "/icons/huggingface.co-favicon-large.ico",
        desc: "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
        link: "https://huggingface.co"
      },
      {
        title: "Reddit",
        icon: "/icons/www.reddit.com-favicon-large.ico",
        desc: "Reddit is where millions of people gather for conversations about the things they care about, in over 100,000 subreddit communities.",
        link: "https://www.reddit.com"
      },
      {
        title: "V2EX",
        icon: "/icons/v2ex.com-favicon-large.ico",
        desc: "创意工作者的社区。讨论编程、设计、硬件、游戏等令人激动的话题。",
        link: "https://www.v2ex.com"
      },
      {
        title: "Product Hunt",
        icon: "/icons/www.producthunt.com-favicon.ico",
        desc: "Product Hunt is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone's talking about.",
        link: "https://www.producthunt.com"
      },
      {
        title: "Hacker News",
        icon: "/icons/y18.svg",
        desc: "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by the investment fund and startup incubator Y Combinator.",
        link: "https://news.ycombinator.com"
      },
      {
        title: "Indie Hackers",
        icon: "/icons/www.indiehackers.com-favicon-large.ico",
        desc: "Connect with developers sharing the strategies and revenue numbers behind their companies and side projects.",
        link: "https://www.indiehackers.com"
      },
      {
        title: "Pinterest",
        icon: "/icons/www.pinterest.com-favicon-large.ico",
        desc: "发现想要尝试的食谱、家居创意、时尚灵感及其他创意点子。",
        link: "https://www.pinterest.com"
      }
    ]
  },
  {
    title: "AI导航站",
    items: [
      {
        title: "toolify",
        icon: "/icons/www.toolify.ai-favicon-large.ico",
        desc: "Toolify is the largest AI tools directory & GPT Store Apps. Over 28100+ AI Websites and AI Tools. AI Tools list and GPTs Store Apps list are auto updated by ChatGPT.",
        link: "https://www.toolify.ai"
      },
      {
        title: "There's An AI For That®",
        icon: "/icons/theresanaiforthat.com-favicon-large.ico",
        desc: "The #1 website for AI tools. Used by 80 million people to find the right tool for any task or use case.",
        link: "https://theresanaiforthat.com"
      },
      {
        title: "Futurepedia",
        icon: "/icons/www.futurepedia.io-favicon-large.ico",
        desc: "Futurepedia is a free site to help you find the best AI tools and software to make your work and life more efficient and productive. Updated daily, join millions of followers of our website, newsletter, and YouTube.",
        link: "https://www.futurepedia.io"
      },
      {
        title: "ShowMeBest.AI",
        icon: "/icons/showmebest.ai-favicon-large.ico",
        desc: "The most comprehensive AI tools directory featuring 4269+ AI tools. Find the perfect AI tools for your business, creativity, and productivity needs.",
        link: "https://showmebest.ai"
      },
      {
        title: "Uneed",
        icon: "/icons/www.uneed.best-favicon.ico",
        desc: "Social Launchpad for tech products: get guaranteed homepage visibility, powerful SEO juice with a 72 DR backlink, and feedback from a community that actually cares",
        link: "https://www.uneed.best"
      },
      {
        title: "aitools.fyi",
        icon: "/icons/aitools.fyi-favicon-large.ico",
        desc: "找到帮助您更快、更轻松地构建下一个令人印象深刻的项目的最佳AI工具。我们为您策划了最佳的AI工具，供您在下一个项目中使用。",
        link: "https://aitools.fyi"
      },
      {
        title: "Dang.ai",
        icon: "/icons/dang.ai-favicon-large.ico",
        desc: "Dang.ai is the best AI tools directory. Browse from over 5000+ AI tools from categories like AI copywriting, AI image generators, AI video creators and more.",
        link: "https://dang.ai"
      },
      {
        title: "HuntScreens",
        icon: "/icons/huntscreens.com-favicon-large.ico",
        desc: "第一时间发现新鲜出炉的好产品。这里有最新的AI工具、创新应用，以及各种新奇有趣的产品和项目。",
        link: "https://huntscreens.com/zh"
      },
      {
        title: "Free AI Tool",
        icon: "/icons/freeaitool.ai-favicon-large.ico",
        desc: "Explore the best free AI tool of 2026! Find the latest artificial intelligence innovations to enhance your work and creativity, all at no cost.",
        link: "https://freeaitool.ai"
      },
      {
        title: "500.tools",
        icon: "/icons/500.tools-favicon-large.ico",
        desc: "A curated list of the 500 best tools.",
        link: "https://500.tools"
      }
    ]
  },
  {
    title: "SEO优化",
    items: [
      {
        title: "🚀独立开发前线|SEO从0到100",
        icon: "/icons/ove.jpg",
        desc: "独立开发者欧维分享的SEO从0到100的知识库，包括SEO基础、关键词研究、内容营销、外链建设、市场营销、GEO等内容",
        link: "https://lownrain.feishu.cn/wiki/RY9EwA4XJixz1AkSRyycw6binMe"
      },
      {
        title: "SEO：新手必备完全指南",
        icon: "/icons/ahrefs.com-favicon.ico",
        desc: "建立强大的SEO知识基础并提升谷歌排名所需的一切资源。",
        link: "https://ahrefs.com/zh/seo"
      },
      {
        title: "Free Backlink Checker by Ahrefs",
        icon: "/icons/ahrefs.com-favicon.ico",
        desc: "With the world's biggest index of live backlinks (over 15 trillion), Ahrefs Backlink Checker will show you the most complete backlink profile for any website.",
        link: "https://ahrefs.com/backlink-checker"
      },
      {
        title: "Website Authority Checker",
        icon: "/icons/ahrefs.com-favicon.ico",
        desc: "Free tool to check the authority of any website based on the quality and quantity of its external backlinks.",
        link: "https://ahrefs.com/website-authority-checker"
      },
      {
        title: "Website Traffic Checker",
        icon: "/icons/ahrefs.com-favicon.ico",
        desc: "Dig into the traffic data for any website and find growth opportunities for yours. Try the free version of Ahrefs’ traffic checker.",
        link: "https://ahrefs.com/traffic-checker"
      },
      {
        title: "Free Keyword Generator Tool",
        icon: "/icons/ahrefs.com-favicon.ico",
        desc: "Generate hundreds of free keyword ideas for Google, Bing, YouTube, and Amazon, complete with monthly search volumes and Keyword Difficulty scores.",
        link: "https://ahrefs.com/keyword-generator"
      },
      {
        title: "Free Keyword Difficulty Checker",
        icon: "/icons/ahrefs.com-favicon.ico",
        desc: "Find the easiest keywords to rank for with our free Keyword Difficulty (KD) checker. No registration required.",
        link: "https://ahrefs.com/keyword-difficulty"
      },
      {
        title: "FrogDR",
        icon: "/icons/frogdr.com-favicon-large.ico",
        desc: "FrogDR helps you tracking and growing your Domain Rating. Get more backlinks, improve your SEO and increase your Domain Authority.",
        link: "https://frogdr.com"
      }
    ]
  },
  {
    title: "外链建设",
    items: [
      {
        title: "掌握这些方法，外链多到根本发不完",
        icon: "/icons/chengyi.png",
        desc: "程艺Truman分享的关于外链发布方法和寻找外链发布渠道",
        link: "https://mp.weixin.qq.com/s/OhcyI51O-gKPo8cbWwmX0A"
      },
      {
        title: "网站出海每日分享：搜索语法找外链",
        icon: "/icons/droidHZ.png",
        desc: "droidHZ分享的通过搜索语法找外链的方法",
        link: "https://mp.weixin.qq.com/s/_zc6_RuTnJ8LVLn0MGIwOw"
      },
      {
        title: "学会“抄”，出海网站的外链多到根本发不完",
        icon: "/icons/ai-biancheng-chuhai.png",
        desc: "教你如何通过抄作业的方式，快速获取外链。",
        link: "https://mp.weixin.qq.com/s/DLIW-egBucY-EOcMS_9_Sw"
      },
      {
        title: "1000UserGuide",
        icon: "/icons/1000userguide.com-favicon.ico",
        desc: "本手册旨在为开发者提供一个全面的获客资源，列出国内外适合独立开发者和创业者早期产品启动的曝光渠道。通过利用这些渠道，你可以有效地推广你的产品，接触目标受众，并找到你的第一批1000个用户.",
        link: "https://1000userguide.com"
      },
      {
        title: "BacklinkHelper",
        icon: "/icons/backlinkhelper.com-favicon-large.ico",
        desc: "BacklinkHelper：适用于SEO用户的免费浏览器插件。快速填充链接表单，生成自然评论，管理、去重并追踪外链。",
        link: "https://backlinkhelper.com"
      },
      {
        title: "100+ DIR",
        icon: "/icons/globe_with_meridians.png",
        desc: "100多个导航站合集，免费提交的和付费提交的都有",
        link: "https://potent-measure-31f.notion.site/14368f418f50804ba419d3ce7a333fa8?v=14368f418f508191a695000c6fcd329a"
      },
      {
        title: "Products by Indie Hackers",
        icon: "/icons/www.indiehackers.com-favicon-large.ico",
        desc: "Discover hundreds of businesses, startups, and side projects that are making money online, and learn how they got to where they are today.",
        link: "https://indiehackers.com/products"
      },
      {
        title: "BestLinks",
        desc: "Ahrefs反向链接批量获取工具。BestLinks可以帮助您获取任意网站的高质量反向链接，批量导出方便SEO分析。",
        link: "https://bestlinks.530.news"
      },
      {
        title: "AISAC - AI摘要&评论生成器",
        icon: "/icons/aisac.co-favicon-large.ico",
        desc: "快速添加博客外链，比较适合游戏站，用于快速添加博客评论",
        link: "https://aisac.co"
      }
    ]
  },
  {
    title: "浏览器插件推荐",
    items: [
      {
        title: "AITDK",
        icon: "/icons/aitdk.svg",
        desc: "探索一系列免费的AI SEO工具和AI生成器，旨在提升您的搜索引擎优化策略。利用人工智能技术，提升您网站的可见性和排名。",
        link: "https://aitdk.com"
      },
      {
        title: "SiteData",
        icon: "/icons/sitedata.dev-favicon-large.ico",
        desc: "Instantly analyze website traffic, discover AdSense networks, and uncover SEO opportunities — all privacy-first and completely free. Website Traffic Analytics & SEO Intelligence Platform, Reverse AdSense Lookup, Keyword Research, WHOIS Data",
        link: "https://sitedata.dev"
      },
      {
        title: "TrendsBar",
        icon: "/icons/trendsbar.net-favicon-large.ico",
        desc: "TrendsBar 是一款专门为 Google Trends 提供帮助的浏览器插件，旨在帮助用户批量查看和比较关键词的趋势，提升挖掘关键词的效率。",
        link: "https://trendsbar.net"
      },
      {
        title: "PubSpy.io",
        icon: "/icons/pubspy.io-favicon-large.ico",
        desc: "The fastest AdSense reverse lookup tool - 50% faster, 65% smaller! Instantly find publisher IDs, discover competitor domains, analyze ads.txt files with 99.9% accuracy. Free Chrome extension.",
        link: "https://pubspy.io"
      },
      {
        title: "TrendsRadar",
        icon: "/icons/trendsradar.org-favicon-large.ico",
        desc: "Discover the power of TrendsRadar to enhance your keyword analysis efficiency. Analyze trends in batch, track market movements, and make data-driven decisions with ease.",
        link: "https://trendsradar.org"
      },
      {
        title: "Google Trends Everywhere",
        icon: "/icons/google_trends_everywhere.png",
        desc: "在谷歌搜索结果旁直接对比关键词的搜索趋势，并通过右键菜单快速打开谷歌趋势",
        link: "https://www.crxsoso.com/webstore/detail/lkjapnejglpmnnpljfnnpndjbbopddge"
      }
    ]
  },
  {
    title: "UI设计",
    items: [
      {
        title: "iLoveIMG",
        icon: "/icons/www.iloveimg.com-favicon.ico",
        desc: "iLoveIMG is the webapp that lets you modify images in seconds for free. Crop, resize, compress, convert, and more in just a few clicks!",
        link: "https://www.iloveimg.com"
      },
      {
        title: "TinyPNG",
        icon: "/icons/tinypng.com-favicon-large.ico",
        desc: "Free online image optimizer for faster websites! Reduce the file size of your WEBP, JPEG and PNG Images with TinyPNG’s smart lossy compression engine.",
        link: "https://tinypng.com"
      },
      {
        title: "Logo.Surf",
        icon: "/icons/www.logo.surf-favicon.ico",
        desc: "Create professional logos and favicons from text in seconds. Free online tool with instant preview, multiple formats, and customizable designs.",
        link: "https://www.logo.surf"
      },
      {
        title: "tinyshots",
        icon: "/icons/tinyshots.png",
        desc: "Upload a screenshot, style it with backgrounds, rounded corners, and shadows, then export as PNG.",
        link: "https://www.tinyshots.app"
      },
      {
        title: "favicon.io",
        icon: "/icons/favicon.io-favicon-large.ico",
        desc: "The only favicon generator you need for your next project. Quickly generate your favicon from text, image, or choose from hundreds of emojis.",
        link: "https://favicon.io"
      },
      {
        title: "tweakcn",
        icon: "/icons/tweakcn.com-favicon-large.ico",
        desc: "Customize theme for shadcn/ui with tweakcn's interactive editor. Supports Tailwind CSS v4, Shadcn UI, and custom styles. Modify properties, preview changes, and get the code in real time.",
        link: "https://tweakcn.com"
      },
      {
        title: "Favicon.im",
        icon: "/icons/favicon.im-favicon-large.ico",
        desc: "即时获取、显示和下载任何网站的图标。为开发者提供简单、快速、免费的图标API。",
        link: "https://favicon.im"
      },
      {
        title: "Ideogram",
        icon: "/icons/ideogram.ai-favicon-large.ico",
        desc: "Generate stunning images, explore creative ideas, and turn inspiration into reality with Ideogram.",
        link: "https://ideogram.ai"
      },
      {
        title: "v0 by Vercel",
        icon: "/icons/v0.app-favicon-large.ico",
        desc: "您的协作式 AI 助手，帮助您设计、迭代和扩展全栈 Web 应用程序。",
        link: "https://v0.app"
      },
      {
        title: "Stitch",
        icon: "/icons/stitch.withgoogle.com-favicon-large.ico",
        desc: "Stitch generates UIs for mobile and web applications, making design ideation fast and easy.",
        link: "https://stitch.withgoogle.com"
      },
      {
        title: "Free Open Graph Generator",
        icon: "/icons/og.indiehub.best-favicon-large.ico",
        desc: "Generate beautiful Open Graph images with zero effort. Use our free online Open Graph Generator tool to generate open graph meta tags for website or blogs.",
        link: "https://og.indiehub.best"
      },
      {
        title: "opengraph.design",
        icon: "/icons/opengraph.design-favicon-large.ico",
        desc: "Generate beautiful Open Graph & Twitter images with zero effort.",
        link: "https://opengraph.design"
      }
    ]
  },
  {
    title: "代码模板",
    items: [
      {
        title: "MkSaaS",
        icon: "/icons/mksaas.com-favicon-large.ico",
        desc: "MkSaaS 是一个使用最先进的技术栈构建的 AI SaaS 模板，它可以帮助你更快更好地构建你的 AI SaaS 网站。",
        link: "https://mksaas.com"
      },
      {
        title: "ShipAny",
        icon: "/icons/shipany.ai-favicon-large.ico",
        desc: "ShipAny 是一个基于 NextJS 的 AI SaaS 开发框架，内置丰富的功能模块和业务组件，开箱即用，帮助你快速上线网站。",
        link: "https://shipany.ai"
      },
      {
        title: "NEXTY.DEV",
        icon: "/icons/nexty.dev-favicon-large.ico",
        desc: "NEXTY.DEV 是一个功能齐全的 Next.js SaaS 全栈模板，让你能够快速构建各种商业网站，无论是内容站、工具站还是集成 AI 能力的付费网站。",
        link: "https://nexty.dev"
      },
      {
        title: "SaaS-Boilerplate",
        icon: "/icons/saas-boilerplate.png",
        desc: "🚀 SaaS Boilerplate is a powerful and fully customizable template to kickstart your SaaS applications. Built with Next.js and Tailwind CSS, and the modular UI components of Shadcn UI. This Next.js SaaS Template helps you to quickly build and launch SaaS with minimal effort.",
        link: "https://github.com/ixartz/SaaS-Boilerplate"
      },
      {
        title: "Next-js-Boilerplate",
        icon: "/icons/saas-boilerplate.png",
        desc: "🚀 Boilerplate and Starter for Next.js with App Router, Tailwind CSS, and TypeScript ⚡️ Prioritizing developer experience first: Next.js, TypeScript, ESLint, Prettier...",
        link: "https://github.com/ixartz/Next-js-Boilerplate"
      },
      {
        title: "raphael-starterkit-v1",
        icon: "/icons/liuxiaopai.jpeg",
        desc: "这是一个基于 Next.js、Supabase 和 Creem.io 构建的现代化、生产就绪的启动套件。非常适合快速构建具有身份验证、订阅和积分系统的 SaaS 应用程序，让您的 MVP 开发速度提升10倍。",
        link: "https://github.com/Idea-To-Business/raphael-starterkit-v1"
      },
      {
        title: "flux-kontext-template",
        icon: "/icons/liangchenmei.png",
        desc: "FluxKontext.space 是一个基于Next.js 15的现代化AI图像生成平台，集成了Cloudflare Turnstile安全验证、Stripe支付系统、Supabase数据库和多语言支持。",
        link: "https://github.com/CharlieLZ/flux-kontext-template"
      },
      {
        title: "ShipFree",
        icon: "/icons/shipfree.png",
        desc: "ShipFree is a free alternative to ShipFast, designed to simplify and optimize your shipping process. It’s built using modern web technologies like Next.js, Bun, Stripe, Drizzle ORM, Postgres and Tailwindcss.",
        link: "https://github.com/revokslab/ShipFree"
      },
      {
        title: "get-saas",
        icon: "/icons/get-saas.jpeg",
        desc: "Get SaaS 是一个功能完整的 SaaS 模版，集成了用户认证、支付系统、多语言支持、SEO优化等企业级功能。基于 Next.js 和现代化技术栈构建，让您专注于业务逻辑，快速推向全球市场。",
        link: "https://github.com/ItusiAI/get-saas"
      },
      {
        title: "Open-Launch",
        icon: "/icons/open-launch.com-favicon-large.ico",
        desc: "The first complete open source alternative to Product Hunt. Built with modern web technologies.",
        link: "https://github.com/openlaunch-org/Open-Launch"
      },
      {
        title: "vite-web-extension",
        icon: "/icons/JohnBra.jpeg",
        desc: "Minimalist Chrome/Firefox Extension Boilerplate with React + Vite + TypeScript + TailwindCSS",
        link: "https://github.com/JohnBra/vite-web-extension"
      }
    ]
  },
  {
    title: "模仿对象",
    items: [
      {
        title: "MkSaaS Showcase",
        icon: "/icons/mksaas.com-favicon-large.ico",
        desc: "Explore SaaS products built by the community",
        link: "https://mksaas.com/showcase"
      },
      {
        title: "ShipAny Showcase",
        icon: "/icons/shipany.ai-favicon-large.ico",
        desc: "Products built with ShipAny",
        link: "https://shipany.ai/showcases"
      },
      {
        title: "NEXTY.DEV Showcase",
        icon: "/icons/nexty.dev-favicon-large.ico",
        desc: "Products built with NEXTY.DEV",
        link: "https://nexty.dev/showcases"
      },
      {
        title: "imgeditor.co(原nanobanana.ai)",
        icon: "/icons/imgeditor.co-favicon-large.ico",
        desc: "Edit images with natural language using Nano Banana's advanced AI powered by Google DeepMind. Ranked #1 on LMArena. Transform any photo with simple text prompts.",
        link: "https://imgeditor.co"
      },
      {
        title: "z-image.ai",
        icon: "/icons/z-image.ai-favicon-large.ico",
        desc: "Z-Image is an efficient 6-billion-parameter foundation model for image generation with Single-Stream Diffusion Transformer. Open-source, fast inference, and excellent photorealistic quality.",
        link: "https://z-image.ai"
      },
      {
        title: "PixToArt",
        icon: "/icons/ghiblio.art-favicon-large.ico",
        desc: "从PixToArt免费开始。使用专业AI模型、模板和多样化风格，生成精美的AI艺术、视频和动漫作品。加入我们的创作社区，探索灵感，轻松创作。",
        link: "https://ghiblio.art"
      },
      {
        title: "Gemini Watermark Cleaner",
        icon: "/icons/geminiwatermarkcleaner.com-favicon-large.ico",
        desc: "Gemini Watermark Cleaner is a gemini watermark remover and Google AI Studio watermark remover for remove Gemini Nano Banana watermark from images. It is designed for gemini.google.com and aistudio.google.com, automatically detecting and removing watermarks as users download images.",
        link: "https://geminiwatermarkcleaner.com"
      },
      {
        title: "remusic.ai",
        icon: "/icons/remusic.ai-favicon-large.ico",
        desc: "Generate full-length songs in seconds with Remusic - a free AI music generator that generates high-quality tracks up to 4 minutes long instantly.",
        link: "https://remusic.ai"
      },
      {
        title: "vmake.ai",
        icon: "/icons/vmake.ai-favicon-large.ico",
        desc: "You can find all your projects created with Vmake and generated video records here.",
        link: "https://vmake.ai"
      },
      {
        title: "seedance2.ai",
        icon: "/icons/seedance2.ai-favicon-large.ico",
        desc: "Create stunning AI videos with Seedance 2.0. Transform images and text into cinematic videos with advanced motion synthesis and professional quality.",
        link: "https://seedance2.ai"
      },
      {
        title: "seedance2video.io",
        icon: "/icons/seedance2video.io-favicon-large.ico",
        desc: "High-quality AI video generation powered by Seedance 2.0. Turn a prompt, image, or simple script into consistent, stable videos with natural pacing.",
        link: "https://seedance2video.io"
      },
      {
        title: "Superpower ChatGPT",
        icon: "/icons/spchatgpt.com-favicon-large.ico",
        desc: "ChatGPT with Folders, Search, Enhanced GPT Store, Image Gallery, Minimap, Side-by-Side Voice GPT, Right-click Functions, Reference chats, Auto GPT Folders, Auto Archive, Export, Prompt Optimizer, Prompt Chains, Hidden Models and more",
        link: "https://spchatgpt.com"
      },
      {
        title: "Banana Prompts",
        icon: "/icons/www.bananaprompts.xyz-favicon-large.ico",
        desc: "Discover and share AI-generated images and videos with the prompts that power them. Browse cinematic AI videos, explore stunning artwork, and learn from the community's most-loved creations.",
        link: "https://www.bananaprompts.xyz"
      },
      {
        title: "Cutout.Pro",
        icon: "/icons/www.cutout.pro-favicon-large.ico",
        desc: "All-in-one visual design platform with AI photo and video editing tools. Automatic background removal, image restoration, graphic design, content generation, text-to-speech, digital humans, AI image generation, image editing and image-to-video. With Cutout.Pro, optimize your content and transform your design ideas into special assets with just one click.",
        link: "https://www.cutout.pro"
      }
    ]
  },
  {
    title: "教程推荐",
    items: [
      {
        title: "如何从头至尾制作一款App",
        desc: "只有一集，虽然是讲iOS App的开发，但是这一集的产品和需求思维是非常值得学习的",
        icon: "/icons/angela.png",
        link: "https://www.bilibili.com/video/BV1eA4m1V7mM"
      },
      {
        title: "入门全栈开发最短路径",
        desc: "james zhou写的全栈入门路径。james zhou之前是一位上班的产品经理，目前他已经入门全栈开发，并且全职投入到出海网站的事业中。",
        icon: "/icons/jameszhou.jpg",
        link: "https://guui24rhwg.feishu.cn/docx/TG3kdTydvoW1kJx170ac5H73nCg"
      }
    ]
  },
  {
    title: "github仓库",
    items: [
      {
        title: "indie-hacker-tools",
        desc: "出海第一步，搞定工具库。本仓库只收录独立开发者出海技术栈和工具，持续整理中……",
        icon: "/icons/indie-hacker-tools.jpeg",
        link: "https://github.com/weijunext/indie-hacker-tools"
      },
      {
        title: "awesome-indie-hacker-tools",
        desc: "开发第一站，搞定技术栈。独立开发/出海开发相关技术栈及工具。持续收录独立开发/出海开发相关技术栈及工具",
        icon: "/icons/awesome-indie-hacker-tools.jpeg",
        link: "https://github.com/iAmCorey/awesome-indie-hacker-tools"
      },
      {
        title: "overseas-website-note",
        desc: "本仓库旨在分享在开发海外网站过程中积累的经验。无论您是刚开始计划将业务拓展到海外，还是已经在这个领域有所尝试，希望这里的内容能为您提供有价值的参考。",
        icon: "/icons/overseas-website-note.png",
        link: "https://github.com/princehuang/overseas-website-note"
      },
      {
        title: "indiehackers-steps",
        desc: "本教程将记录我的独立开发者出海之路，包含从最基本的如何注册美国公司到银行，使用stripe收款，出海的工作流选择以及如何营销。有疑问可以关注我的 twitter ,私信交流",
        icon: "/icons/blue-sky.jpeg",
        link: "https://github.com/hua1995116/indiehackers-steps"
      },
      {
        title: "Awesome-independent-tools",
        desc: "收录独立开发、AI 出海领域最新、最实用的免费工具与资源",
        icon: "/icons/Awesome-independent-tools.gif",
        link: "https://github.com/yaolifeng0629/Awesome-independent-tools"
      }
    ]
  },
  {
    title: "API供应商",
    items: [
      {
        title: "Kie.ai",
        icon: "/icons/kie.ai-favicon-large.ico",
        desc: "通过一个API接入最强大的AI模型，支持AI聊天、视频、图像和音乐生成。获取免费API密钥，稳定的表现，以及比Replicate和Fal.ai更优惠的定价。",
        link: "https://kie.ai/zh-CN"
      },
      {
        title: "fal.ai",
        icon: "/icons/fal.ai-favicon-large.ico",
        desc: "Easiest & most cost-effective way to use Gen AI. fal.ai is how devs integrate dozens of generative media models. FLUX, King, Hailuo +600 more",
        link: "https://fal.ai"
      },
      {
        title: "Replicate",
        icon: "/icons/replicate.com-favicon-large.ico",
        desc: "Run open-source machine learning models with a cloud API",
        link: "https://replicate.com"
      },
      {
        title: "WaveSpeedAI",
        icon: "/icons/wavespeed.ai-favicon-large.ico",
        desc: "WaveSpeedAI home – explore the platform that speeds up image, video and audio generation so you can build AI features, creative tools and workflows faster.",
        link: "https://wavespeed.ai"
      },
      {
        title: "evolink.ai",
        icon: "/icons/evolink.ai-favicon-large.ico",
        desc: "Access 40+ AI models for chat, video, image, and music through one EvoLink API, with 99.9% uptime, smart routing, and pricing up to 70% cheaper than direct use.",
        link: "https://evolink.ai"
      },
      {
        title: "rapidapi",
        icon: "/icons/rapidapi.com-favicon-large.ico",
        desc: "Nokia today announced that it has acquired Rapid’s technology assets, including the world’s largest API marketplace, and its highly skilled team.",
        link: "https://rapidapi.com"
      },
      {
        title: "兔子API",
        icon: "/icons/logo-tuzi.png",
        desc: "兔子AI - 专业的AI接口服务平台，支持GPT-4o、Claude-3.7、Grok-3、DeepSeek-V3等300+AI模型。价格仅为官方9.56%起，提供图像生成、联网搜索、文件分析等全功能服务。注册即送0.4美金试用额度，支持API调用、桌面应用、浏览器插件等多种接入方式。",
        link: "https://api.tu-zi.com"
      },
      {
        title: "302.AI",
        icon: "/icons/302.ai-favicon-large.ico",
        desc: "302.AI是按用量付费的企业级AI平台，提供最新图像、视频、音频及语言模型API，一站式接入无需多供应商付费。享企业级稳定性、无TPM限制、丰富开源应用生态，支持私有化部署。立即体验高效AI开发，适用于企业及爱好者",
        link: "https://302.ai"
      },
      {
        title: "apimart",
        icon: "/icons/apimart.ai-favicon-large.ico",
        desc: "The most affordable unified AI API. Integrate GPT-5, Claude 4.5, Sora 2 & Flux.1 with a single key. Developer-friendly, high uptime, and low latency.",
        link: "https://apimart.ai"
      },
      {
        title: "ZenMux",
        icon: "/icons/zenmux.svg",
        desc: "The Enterprise LLM Platform. Get a Unified API for all models, intelligent routing, and AI Model Insurance to eliminate hallucination risk.",
        link: "https://zenmux.ai"
      },
      {
        title: "OpenRouter",
        icon: "/icons/openrouter.ai-favicon-large.ico",
        desc: "The unified interface for LLMs. Find the best models & prices for your prompts",
        link: "https://openrouter.ai"
      }
    ]
  },
  {
    title: "AI编程工具",
    items: [
      {
        title: "Ai Go Code",
        icon: "/icons/www.aigocode.com-favicon-large.ico",
        desc: "Ai Go Code 提供稳定、高效的AI编程服务。支持Claude、ChatGPT等多种AI模型，帮助开发者提升10倍编程效率。立即体验AI驱动的编程助手。",
        link: "https://www.aigocode.com"
      },
      {
        title: "兔小店",
        icon: "/icons/store.tu-zi.com-favicon-large.ico",
        desc: "提供claude code、codex、gemini、cursor、gpt账号、google账户等账号购买服务。",
        link: "https://store.tu-zi.com"
      }
    ]
  },
  {
    title: "支付接入",
    items: [
      {
        title: "全球收款手册",
        icon: "/icons/www.setupyourpay.com-favicon-large.ico",
        desc: "远程注册美国公司，开通 Stripe 收款账户，并开始收款。本站一站式解决跨境收款难题的专业指南。涵盖从个人creem收款到美国公司注册到全球收款通道配置的完整流程，开通水星银行，助你轻松实现全球业务拓展。",
        link: "https://www.setupyourpay.com"
      },
      {
        title: "creem",
        icon: "/icons/www.creem.io-favicon-large.ico",
        desc: "Smooth payments for SaaS and Indie Hackers that don't break the bank",
        link: "https://www.creem.io"
      },
      {
        title: "Polar",
        icon: "/icons/polar.sh-favicon-large.ico",
        desc: "Monetize your software with ease",
        link: "https://polar.sh"
      },
      {
        title: "出海研习社",
        icon: "/icons/boat.png",
        desc: "出海研习社（与其国内卷，不如出海浪。）",
        link: "https://minibook.notion.site/b39d0ac975a44f3089639215d96135a0"
      },
      {
        title: "无需信用卡/海外公司，一天内搞定海外 saas 支付问题（包括stripe、俄罗斯支付）",
        icon: "/icons/mowang.png",
        desc: "介绍了302 pay这个支付渠道",
        link: "https://mp.weixin.qq.com/s/f4SBwNP2AIjr37i7UnpALg"
      }
    ]
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.",
        icon: "/icons/vercel.com-favicon-large.ico",
        link: "https://vercel.com"
      },
      {
        title: "Netlify",
        desc: "Build with AI or code, deploy instantly. One platform with everything you need to make real apps live.",
        icon: "/icons/www.netlify.com-favicon-large.ico",
        link: "https://www.netlify.com"
      },
      {
        title: "Railway",
        desc: "Railway is a full-stack cloud for deploying web apps, servers, databases, and more with automatic scaling, monitoring, and security.",
        icon: "/icons/railway.com-favicon-large.ico",
        link: "https://railway.app/"
      }
    ]
  },
  {
    title: "服务器推荐",
    items: [
      {
        title: "hetzner",
        desc: "Hetzner（赫兹纳）是一家总部位于德国的老牌基础架构（IaaS）提供商。在开发者圈子里，它被公认为“性价比之王”。缺点是账号注册严苛。",
        icon: "/icons/www.hetzner.com-favicon-large.ico",
        link: "https://www.hetzner.com"
      }
    ]
  },
  {
    title: "网络环境",
    items: [
      {
        title: "IKUUU VPN",
        desc: "用下来感觉还不错的机场",
        icon: "/icons/ikuuu.nl-favicon-large.ico",
        link: "https://ikuuu.nl"
      },
      {
        title: "AdsPower指纹浏览器",
        desc: "AdsPower指纹浏览器是一款为跨境电商,广告投放,海外社媒营销等业务提供账号矩阵管理的防关联浏览器,模拟浏览器指纹实现一台电脑多开窗口,Ads指纹浏览器适用于多个平台如跨境电商亚马逊,FB,Google等,是可以实现浏览器多开和高效团队管理协作的超级浏览器。",
        icon: "/icons/www.adspower.net-favicon-large.ico",
        link: "https://www.adspower.net"
      }
    ]
  },
  {
    title: "心灵加油站",
    items: [
      {
        title: "海外AI产品新手复盘：4个月赚到1刀，15天破1000刀",
        icon: "/icons/wangmazha.jpg",
        desc: "王马扎大佬的复盘文章，非常值得一读",
        link: "https://zhizhe888.feishu.cn/docx/Z40jdqs7woO8sxxDtgFcG6sDnVb"
      },
      {
        title: "独立开发两年如何收入10万美刀",
        icon: "/icons/mksaas.me-favicon-large.ico",
        desc: "来自fox的独立开发经验分享。fox毕业于清华大学，目前就职于微信团队。",
        link: "https://mksaas.me/blog/2025"
      },
      {
        title: "加入哥飞社群一年，终于做出一个月近 900K流量的网站.",
        icon: "/icons/quan.png",
        link: "https://mp.weixin.qq.com/s/FDqID4-yVeakVdFzA_vqAQ"
      }
    ]
  },
  {
    title: "技术总结",
    items: [
      {
        title: "咔叽哇老师的分享内容笔记",
        icon: "/icons/chenjin.jpg",
        desc: "给哥飞深圳场当课代表。整理了 @教练我想上站 咔叽哇老师的分享内容笔记。（搜了下6月场发现这次真的非常新人友好）",
        link: "https://m.okjike.com/originalPosts/693d02e68d2d7e459676164f"
      }
    ]
  },
  {
    title: "公众号推荐",
    items: [
      {
        title: "哥飞",
        desc: "哥飞，出海鼓励师，SEO爱好者，Adsense玩家，AI工具出海创业者。V: gefeisvip",
        icon: "/icons/gefei.png",
        link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTIzMzYyMA==&scene=124#wechat_redirect",
        tip: "请在微信中打开链接"
      },
      {
        title: "droidHZ",
        desc: "网站出海生意人：专注网站出海、SEO增长、AI工具实战 分享我的 实战经验、踩坑教训 和 变现思路 希望和你一起探索网站出海的新机会 🌍",
        icon: "/icons/droidHZ.png",
        link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkzNzYzNzE3Mg==&scene=124#wechat_redirect",
        tip: "请在微信中打开链接"
      },
      {
        title: "AI编程出海",
        desc: "探索AI编程思路与自动批量思维，分享AI最新应用和出海赚钱机会。关注“AI·编程·出海”，一起编写未来的无限可能。",
        icon: "/icons/ai-biancheng-chuhai.png",
        link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwMDcxNjU3MA==&scene=124#wechat_redirect",
        tip: "请在微信中打开链接"
      },
      {
        title: "程艺Truman",
        desc: "聊聊出海，聊聊流量，聊聊AI编程。V:trumansoho",
        icon: "/icons/chengyi.png",
        link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxMzc5NjA2Mw==&scene=124#wechat_redirect",
        tip: "请在微信中打开链接"
      },
      {
        title: "A梦进化论",
        desc: "A梦，原阿里设计师，现在出海独立开发者，分享和剖析一系列独立开发者的成功案例。",
        icon: "/icons/ameng.png",
        link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDQ3ODI3NQ==&scene=124#wechat_redirect",
        tip: "请在微信中打开链接"
      }
    ]
  },
  {
    title: "博主推荐",
    items: [
      {
        title: "软件工程师Tim",
        desc: "软件工程师Tim的B站账号，主要分享关于adsense、副业网站、cloudflare等话题。",
        icon: "/icons/tim.jpg",
        link: "https://space.bilibili.com/368778383"
      },
      {
        title: "空弦Uni",
        desc: "空弦的即刻账号。空弦是前字节跳动工程师，现全职投入到出海网站事业。分享关于网站出海、SEO、saas等话题。做事严谨，逻辑清晰，口号是真诚地做产品，做真诚的产品。",
        icon: "/icons/kongxian.jpg",
        link: "https://okjk.co/HL4oq7"
      },
      {
        title: "零度解说",
        desc: "零度解说的油管账号。带你发现有意思的、实用的软件或者网站。对于挖掘需求也很有用",
        icon: "/icons/lingdu.jpg",
        link: "https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w"
      }
    ]
  },
  {
    title: "新手专区",
    items: [
      {
        title: "人人都能学会的发掘 web 产品需求方法入门",
        icon: "/icons/gefei.png",
        link: "https://mp.weixin.qq.com/s/rzqgRubYO8Em3xuWRGufuw"
      },
      {
        title: "人人都能学会的挖掘 web 产品需求之从出站域名发现新需求新产品",
        icon: "/icons/gefei.png",
        link: "https://mp.weixin.qq.com/s/D77kXZ9_RCifP9iil6fGxQ"
      },
      {
        title: "【收藏】51个挖掘需求时能用得上的财富密码关键词哥飞免费赠送给大家",
        icon: "/icons/gefei.png",
        link: "https://mp.weixin.qq.com/s/pFi683ZoT_WJXO_t770vSQ"
      },
      {
        title: "出海需求怎么挖？我用 Google “新词”找到 0-1 的机会（附 122 个词根）",
        icon: "/icons/mengjian.png",
        link: "https://mp.weixin.qq.com/s/sBhDHvb15oI3TGTB5qhCTw"
      },
      {
        title: "网站出海每日分享：月入3千美刀达成，每日分享梳理",
        icon: "/icons/droidHZ.png",
        link: "https://mp.weixin.qq.com/s/NS7dMsR4yqwqo__urBcLLQ"
      },
      {
        title: "读完哥飞的几百篇文章，我整理了这份“出海保姆级”实战指南。",
        icon: "/icons/xiaoxiami.png",
        link: "https://mp.weixin.qq.com/s/iHfC87WfCuYaQnAaXDwcJA"
      },
      {
        title: "整理了哥飞大佬的几百篇文章，我总结了这套“关键词价值”判断流程。",
        icon: "/icons/xiaoxiami.png",
        link: "https://mp.weixin.qq.com/s/bG7VMwdIjjKrW4Y2Jc0q-w"
      }
    ]
  },
  {
    title: "域名查询",
    items: [
      {
        title: "Query.Domains",
        desc: "免费批量域名可用性检查工具，基于WHOIS查询获得即时结果。支持批量WHOIS查询API。",
        icon: "/icons/query.domains-favicon-large.ico",
        link: "https://query.domains"
      },
      {
        title: "NameBeta",
        desc: "即时检查域名是否可注册，并对比各注册商的实时价格。快速找到最优惠的域名注册渠道。",
        icon: "/icons/namebeta.com-favicon-large.ico",
        link: "https://namebeta.com"
      },
      {
        title: "zh-hans.tld-list.com",
        desc: "比较来自注册商3,495域扩展54的价格。检查域可用性，发现免费功能，并找到最佳域注册商。",
        icon: "/icons/zh-hans.tld-list.com-favicon.ico",
        link: "https://zh-hans.tld-list.com/"
      }
    ]
  },
  {
    title: "其他导航站",
    items: [
      {
        title: "IndieHub",
        desc: "IndieHub is a community for Indie Makers to discover tools, launch products, and ship applications faster and better.",
        icon: "/icons/indiehub.best-favicon-large.ico",
        link: "https://indiehub.best"
      },
      {
        title: "Indie Tools",
        desc: "Discover SEO tools & community for indie developers, hackers, and SaaS makers. Learn Google SEO strategies, growth hacking, digital marketing for independently developed projects, startups, and online business. Free resources for solopreneurs.",
        icon: "/icons/indietools-work.svg",
        link: "https://indietools.work"
      },
      {
        title: "Indie Hacker Tools - 独立开发者出海工具箱",
        desc: "Indie Hacker Tools 精心为出海独立开发者和创业者挑选并分类优质的开发、设计、营销和商业分析工具。我们帮助您发现实用高效的工具组合，提高工作效率，实现营利。",
        icon: "/icons/indiehackertools.net-favicon-large.ico",
        link: "https://indiehackertools.net"
      },
      {
        title: "独立开发者出海技术栈",
        desc: "出海第一站，搞定技术栈, 聚合全网独立开发者出海技术栈和工具, 技术出海相关的技术实践经验、合规解读、方案选型等",
        icon: "/icons/www.chuhai.tools-favicon-large.ico",
        link: "https://www.chuhai.tools"
      },
      {
        title: "网址导航_独立开发前线",
        desc: "独立开发前线是独立开发指南网站，内容包含独立开发创意发现，产品实现，获取增长，流量变现等方面，旨在帮助独立开发者更快的成长，打造属于自己的盈利产品。",
        icon: "/icons/91wink.com-favicon-large.ico",
        link: "https://91wink.com/sites"
      }
    ]
  }
]
