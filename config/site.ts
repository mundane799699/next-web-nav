export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "独立掘金网",
  url: "https://indiegolden.com",
  description: "独立掘金网 - 网址导航",
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
        title: "boringcashcow",
        icon: "/icons/boringcashcow.com-favicon-large.ico",
        desc: "Find out about boring businesses that make a lot of money quietly. Learn how they succeed and build your own.",
        link: "https://boringcashcow.com"
      },
      {
        title: "toolify",
        icon: "/icons/www.toolify.ai-favicon-large.ico",
        desc: "Toolify is the largest AI tools directory & GPT Store Apps. Over 28100+ AI Websites and AI Tools. AI Tools list and GPTs Store Apps list are auto updated by ChatGPT.",
        link: "https://www.toolify.ai"
      },
      {
        title: "HuntScreens",
        icon: "/icons/huntscreens.com-favicon-large.ico",
        desc: "第一时间发现新鲜出炉的好产品。这里有最新的AI工具、创新应用，以及各种新奇有趣的产品和项目。",
        link: "https://huntscreens.com/zh"
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
      }
    ]
  },
  {
    title: "SEO优化",
    items: [
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
      }
    ]
  },
  {
    title: "外链建设",
    items: [
      {
        title: "1000UserGuide",
        icon: "/icons/1000userguide.com-favicon.ico",
        desc: "本手册旨在为开发者提供一个全面的获客资源，列出国内外适合独立开发者和创业者早期产品启动的曝光渠道。通过利用这些渠道，你可以有效地推广你的产品，接触目标受众，并找到你的第一批1000个用户.",
        link: "https://1000userguide.com"
      },
      {
        title: "掌握这些方法，外链多到根本发不完",
        icon: "/icons/chengyi.png",
        desc: "程艺Truman分享的关于外链发布方法和寻找外链发布渠道",
        link: "https://mp.weixin.qq.com/s/OhcyI51O-gKPo8cbWwmX0A"
      },
      {
        title: "外链建设文档",
        icon: "/icons/ove.jpg",
        desc: "独立开发者欧维分享的外链建设文档，包括外链建设策略、免费外链资源、付费外链资源、外链导航、外链建设工具",
        link: "https://lownrain.feishu.cn/wiki/RY9EwA4XJixz1AkSRyycw6binMe"
      },
      {
        title: "BacklinkHelper",
        icon: "/icons/backlinkhelper.com-favicon-large.ico",
        desc: "BacklinkHelper：适用于SEO用户的免费浏览器插件。快速填充链接表单，生成自然评论，管理、去重并追踪外链。",
        link: "https://backlinkhelper.com"
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
        title: "Logo.Surf",
        icon: "/icons/www.logo.surf-favicon.ico",
        desc: "Create professional logos and favicons from text in seconds. Free online tool with instant preview, multiple formats, and customizable designs.",
        link: "https://www.logo.surf"
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
        title: "出海研习社",
        icon: "/icons/boat.png",
        desc: "出海研习社（与其国内卷，不如出海浪。）",
        link: "https://minibook.notion.site/b39d0ac975a44f3089639215d96135a0"
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
        title: "待补充",
        desc: "待补充",
        icon: "/icons/baidu.com-favicon-large.ico",
        link: "https://www.baidu.com"
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
      }
    ]
  },
  {
    title: "新手专区",
    items: [
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
      }
    ]
  },

  {
    title: "社区",
    items: [
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
      }
    ]
  }
]
