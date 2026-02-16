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
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
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
        title: "1000UserGuide",
        icon: "/icons/1000userguide.com-favicon.ico",
        desc: "本手册旨在为开发者提供一个全面的获客资源，列出国内外适合独立开发者和创业者早期产品启动的曝光渠道。通过利用这些渠道，你可以有效地推广你的产品，接触目标受众，并找到你的第一批1000个用户.",
        link: "https://1000userguide.com"
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
    title: "教程推荐",
    items: [
      {
        icon: "https://postcss.org/assets/logo-3e39b0aa.svg",
        title: "PostCSS",
        desc: "一个用 JavaScript 转换 CSS 的工具",
        link: "https://postcss.org"
      },
      {
        icon: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com"
      },
      {
        icon: "https://www.tailwindcss.cn/apple-touch-icon.png",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://www.tailwindcss.cn"
      },
      {
        title: "WindiCSS",
        desc: "Windi CSS 是下一代工具优先的 CSS 框架",
        icon: "https://windicss.org/assets/logo.svg",
        link: "https://windicss.org"
      },
      {
        title: "Twind",
        desc: "现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案",
        icon: "/icons/twind.svg",
        link: "https://github.com/tw-in-js/twind"
      },
      {
        title: "UnoCSS",
        desc: "即时按需原子 CSS 引擎",
        icon: "https://uno.antfu.me//favicon.svg",
        link: "https://uno.antfu.me/"
      },
      {
        title: "Bootstrap",
        desc: "Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站",
        icon: "https://img.kuizuo.cn/20210907055816.png",
        link: "https://v5.bootcss.com/"
      },
      {
        title: "w3schools Css 教程",
        desc: "w3schools 从基础到高级的CSS教程",
        icon: "https://www.w3schools.com/favicon.ico",
        link: "https://www.w3schools.com/css"
      },
      {
        title: "CSS-Inspiration",
        desc: "CSS灵感",
        icon: "/icons/css-inspiration.png",
        link: "https://csscoco.com/inspiration"
      },
      {
        title: "CSS常用样式",
        desc: "CSS常用样式",
        icon: "https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        link: "https://github.com/QiShaoXuan/css_tricks"
      },
      {
        title: "CSSFX",
        desc: "一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持",
        icon: "/icons/cssfx.png",
        link: "https://cssfx.netlify.app/"
      },
      {
        title: "NES.css",
        desc: "一个像素风格的CSS框架",
        icon: "https://nostalgic-css.github.io/NES.css/favicon.png",
        link: "https://nostalgic-css.github.io/NES.css/"
      },
      {
        title: "clay.css",
        desc: "claymorphism 泥陶态风格CSS",
        icon: "https://codeadrian.github.io/clay.css/apple-touch-icon.png",
        link: "https://codeadrian.github.io/clay.css/"
      },
      {
        title: "loading.io",
        desc: "Animation Made Easy",
        icon: "/icons/loading.ico",
        link: "https://loading.io/"
      },
      {
        title: "神奇UI样式",
        desc: "我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。",
        icon: "/icons/uiverse.png",
        link: "https://uiverse.io"
      },
      {
        title: "HYPE4",
        desc: "透明玻璃态生成器",
        icon: "https://hype4.academy/_next/static/media/logorwd@2x.b40bc92c.png",
        link: "https://hype4.academy/tools/glassmorphism-generator"
      },
      {
        title: "Omatsuri",
        desc: "收集不同的发电机，让您的生活更轻松。",
        icon: "https://omatsuri.app/assets/favicon.ico",
        link: "https://omatsuri.app"
      },
      {
        title: "smooth shadow",
        desc: "快速轻松地实现基于 CSS 阴影的绝佳工具。您只需要指定一些阴影设置，代码就在您的路上。",
        icon: "https://shadows.brumm.af/favicon.svg",
        link: "https://shadows.brumm.af/"
      },
      {
        title: "FANCY-BORDER-RADIUS",
        desc: "花式边界半径,有助于创建 CSS 花式边框。",
        icon: "https://9elements.github.io/fancy-border-radius/favicon-32x32.png",
        link: "https://9elements.github.io/fancy-border-radius/"
      },
      {
        title: "Coolors",
        desc: "创建调色板",
        icon: "/icons/coolors.png",
        link: "https://coolors.co/"
      }
    ]
  },
  {
    title: "服务器推荐",
    items: [
      {
        icon: "https://deno.com/logo.svg",
        title: "deno",
        desc: "Deno is the open-source JavaScript runtime for the modern web.",
        link: "https://deno.com/"
      },
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn"
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com"
      },
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com"
      },
      {
        icon: "https://www.eggjs.org/favicon.png",
        title: "Egg",
        desc: "为企业级框架和应用而生",
        link: "https://www.eggjs.org/zh-CN"
      },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn"
      },
      {
        title: "TypeORM",
        desc: "TypeORM 是一个 ORM 框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)一起使用",
        icon: "/icons/typeorm.ico",
        link: "https://typeorm.bootcss.com"
      },
      {
        title: "Axios",
        desc: "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
        icon: "/icons/axios.ico",
        link: "https://axios-http.cn/"
      },
      {
        title: "NPM",
        desc: "NPM是世界上最大的包管理器",
        icon: "https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png",
        link: "https://www.npmjs.com"
      },
      {
        title: "Yarn",
        desc: "Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求",
        icon: "https://www.yarnpkg.cn/favicon-32x32.png",
        link: "https://www.yarnpkg.cn"
      },
      {
        title: "Pnpm",
        desc: "速度快、节省磁盘空间的软件包管理器",
        icon: "https://www.pnpm.cn/img/favicon.png",
        link: "https://pnpm.io"
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
      }
    ]
  },
  {
    title: "心灵加油站",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com"
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev"
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com"
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build"
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn"
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io"
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs"
      }
    ]
  },
  {
    title: "公众号推荐",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料",
        link: "https://developer.mozilla.org/zh-CN"
      },
      {
        icon: "https://static.runoob.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com"
      },
      {
        icon: "/icons/es6.png",
        title: "ES6 入门教程",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "https://es6.ruanyifeng.com/"
      },
      {
        icon: "/icons/typescript.png",
        title: "深入理解 TypeScript",
        desc: "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法",
        link: "https://jkchao.github.io/typescript-book-chinese/"
      },
      {
        icon: "/icons/rust.svg",
        title: "Rust语言圣经",
        desc: "一份高质量 Rust 教程",
        link: "https://course.rs"
      }
    ]
  },
  {
    title: "博主推荐",
    items: [
      {
        title: "Mastergo",
        desc: "面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现",
        icon: "https://mastergo.com/favicon.ico",
        link: "https://mastergo.com/"
      },
      {
        title: "即时设计",
        desc: "可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」",
        icon: "https://img.js.design/assets/webImg/favicon.ico",
        link: "https://js.design/"
      },
      {
        title: "Figma",
        desc: "Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。",
        icon: "/icons/figma.png",
        link: "https://www.figma.com/"
      },
      {
        title: "Pixso",
        desc: "一站式完成原型、设计、交互与交付，为数字化团队协作提效",
        icon: "https://cms.pixso.cn/images/logo.svg",
        link: "https://pixso.cn/"
      },
      {
        title: "AIDesign",
        desc: "10秒创建您的LOGO！",
        icon: "https://ailogo.qq.com//favicon.ico?v=1.1",
        link: "https://ailogo.qq.com/"
      }
    ]
  },
  {
    title: "新手专区",
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
        title: "Electron",
        desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
        icon: "/icons/electron.ico",
        link: "https://www.electronjs.org/"
      },
      {
        title: "Tauri",
        desc: "Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件",
        icon: "https://tauri.app/meta/favicon-96x96.png",
        link: "https://tauri.app/"
      },
      {
        title: "Flutter",
        desc: "Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用",
        icon: "https://flutter.cn/assets/images/cn/flutter-icon.png",
        link: "https://flutter.cn/"
      },
      {
        title: "Uni-app",
        desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台",
        icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png",
        link: "https://uniapp.dcloud.io/"
      },
      {
        title: "Taro",
        desc: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用",
        icon: "/icons/taro.png",
        link: "https://taro.jd.com"
      }
    ]
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com"
      },
      {
        title: "Netlify",
        desc: "Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能",
        icon: "/icons/netlify.png",
        link: "https://www.netlify.com"
      },
      {
        title: "Coolify",
        desc: "一个开源和自我托管的 Heroku/Netlify 替代品",
        icon: "/icons/coolify.png",
        link: "https://coolify.io"
      },
      {
        title: "GitHub Codespace",
        desc: "全球最大的软件项目托管平台，发现优质开源项目",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        link: "https://github.com/codespaces"
      },
      {
        title: "Railway",
        desc: "带上你的代码，剩下交给我们 ",
        icon: "/icons/railway.png",
        link: "https://railway.app/"
      },
      {
        title: "Supabase",
        desc: "Supabase 是一个开源的后端即服务（BaaS）平台，它可以帮助开发者快速构建应用程序，无需编写后端代码。",
        icon: "/icons/supabase.png",
        link: "https://supabase.com/"
      }
    ]
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com"
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn"
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com"
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com"
      },
      {
        title: "博客园",
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com"
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://zhihu.com"
      }
    ]
  }
]
