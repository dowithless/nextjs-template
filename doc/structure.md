# Project structure and organization

**使用 `app` 目录** 和 **`src` 目录** 的最佳实践目录结构通常如下：

```
/project-root
├── public/                # 静态资源 (不会经过 Webpack 处理)
│   ├── images/            # 图片资源
│   ├── favicon.ico        # 网站图标
│   └── ...
├── src/                   # 主要代码目录 (推荐)
│   ├── app/               # Next.js App Router 目录
│   │   ├── (routes)/      # 组织路由的分组 (可选)
│   │   │   ├── dashboard/ # 仪表盘页面 (/dashboard)
│   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx # 可选，用于嵌套路由
│   │   │   └── settings/  # 设置页面 (/settings)
│   │   │       ├── page.tsx
│   │   │       ├── layout.tsx
│   │   ├── api/           # API 路由
│   │   │   ├── auth/      # 例如：身份验证 API
│   │   │   │   ├── route.ts # 处理请求
│   │   ├── layout.tsx     # 全局布局
│   │   ├── page.tsx       # 首页
│   │   ├── loading.tsx    # 全局 Loading
│   │   ├── error.tsx      # 全局错误处理
│   ├── components/        # 可复用组件
│   │   ├── ui/            # UI 组件
│   │   ├── layout/        # 布局组件
│   │   ├── shared/        # 共享组件
│   ├── hooks/             # 自定义 Hooks
│   ├── lib/               # 工具库，如 API 调用、数据库等
│   │   ├── auth.ts        # 认证逻辑
│   │   ├── fetcher.ts     # 数据请求
│   │   ├── prisma.ts      # 数据库 Prisma 配置
│   ├── providers/         # React Context Provider
│   │   ├── theme-provider.tsx
│   │   ├── auth-provider.tsx
│   ├── styles/            # 样式文件
│   │   ├── globals.css    # 全局样式
│   │   ├── tailwind.css   # Tailwind 配置
│   ├── types/             # TypeScript 类型
│   ├── utils/             # 辅助工具函数
├── .env                   # 环境变量
├── .gitignore             # Git 忽略文件
├── next.config.mjs        # Next.js 配置
├── tailwind.config.ts     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 依赖管理
```

---

## **目录结构设计原则**

1. **`src/` 作为主要代码目录**

   - 避免 `app/` 目录直接位于根目录，使 `src/` 里代码更清晰组织。
   - Next.js **不强制** 使用 `src/`，但推荐这样做。

2. **`app/` 目录：文件路由、API、Layout 统一管理**

   - 页面 (`page.tsx`) 放在 `app/` 内部，路径直接映射到 URL。
   - `api/` 目录放在 `app/` 内，适用于 `app/api/xxx/route.ts` 形式的 API 处理。

3. **`components/` 目录：可复用组件**

   - `ui/`：纯 UI 组件（无状态、无逻辑）。
   - `layout/`：页面布局组件。
   - `shared/`：带业务逻辑的可复用组件。

4. **`lib/` 目录：业务逻辑 & 数据处理**

   - 数据库连接 (`prisma.ts`)、身份验证 (`auth.ts`)、API 请求封装 (`fetcher.ts`) 等。

5. **`providers/` 目录：React Context 提供者**

   - 例如 `theme-provider.tsx` 管理暗色模式，`auth-provider.tsx` 处理用户登录状态。

6. **`styles/` 目录**

   - `globals.css` 处理全局样式，`tailwind.css` 存放 Tailwind 相关配置。

7. **`types/` 目录**

   - 存放 TypeScript 的类型定义，方便在整个项目中复用。

8. **`utils/` 目录**
   - 存放工具函数，如日期格式化、字符串处理等。

---

## **为什么这样设计？**

- **清晰分工**：`app/` 负责页面，`components/` 负责 UI，`lib/` 负责数据，`providers/` 负责全局状态。
- **更易扩展**：当项目变大时，每个部分都有明确的位置，不会变得杂乱。
- **优化 API & 逻辑管理**：业务逻辑 (`lib/`)、API (`app/api/`)、状态管理 (`providers/`) 各司其职。

---

这个结构适用于大部分 Next.js `app router` 项目，并且符合最佳实践！🚀
