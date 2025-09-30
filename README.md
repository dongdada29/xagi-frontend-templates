# XAGI Frontend Templates

这个仓库包含了 XAGI Frontend MCP 服务器使用的各种前端项目模板，采用 monorepo 架构统一管理。

## 🏗️ 项目架构

本项目使用 **pnpm workspace** 管理，采用现代化的 monorepo 架构：

```
xagi-frontend-templates/
├── packages/                    # 模板包
│   ├── react-vite/             # React + Vite + TypeScript
│   ├── vue3-vite/              # Vue 3 + Vite + TypeScript  
│   └── react-next/             # React + Next.js + TypeScript + Tailwind CSS
├── scripts/                     # 管理脚本
├── package.json                # 根包配置
└── pnpm-workspace.yaml         # workspace 配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装和运行

```bash
# 克隆项目
git clone <repository-url>
cd xagi-frontend-templates

# 安装所有依赖
pnpm install

# 启动所有开发服务器
pnpm dev

# 构建所有模板
pnpm build

# 运行测试
node scripts/test-all.js
```

## 📦 可用模板

### React + Vite
- **包名**: `@xagi-templates/react-vite`
- **路径**: `packages/react-vite/`
- **端口**: 3000
- **特性**:
  - React 18 + TypeScript + Vite
  - 现代化构建工具链
  - 热重载开发服务器
  - ESLint + Prettier 代码规范
  - Axios HTTP 客户端集成
  - **内置 HTTP 客户端解决方案**
  - 基于 Axios 的统一请求管理
  - React Hooks 封装
  - 自动 token 管理
  - 统一的错误处理

### Vue3 + Vite
- **包名**: `@xagi-templates/vue3-vite`
- **路径**: `packages/vue3-vite/`
- **端口**: 4000
- **特性**:
  - Vue 3 + TypeScript + Vite
  - Composition API
  - 单文件组件 (SFC)
  - 快速热重载
  - Axios HTTP 客户端集成
  - **内置 HTTP 客户端解决方案**
  - 基于 Axios 的统一请求管理
  - Vue 3 Composition API 封装
  - 自动 token 管理
  - 统一的错误处理

### React + Next.js
- **包名**: `@xagi-templates/react-next`
- **路径**: `packages/react-next/`
- **端口**: 3000
- **特性**:
  - Next.js 14 + React 18 + TypeScript
  - Tailwind CSS 样式系统
  - Radix UI 组件库
  - App Router 架构
  - SEO 优化和性能优化
  - **内置 HTTP 客户端解决方案**
  - 基于 Axios 的统一请求管理
  - React Hooks 封装
  - 自动 token 管理
  - 统一的错误处理
  - 支持 Server Components

## 🛠️ 开发命令

### 根级别命令

```bash
pnpm dev                # 启动所有开发服务器
pnpm build              # 构建所有模板
pnpm build:production   # 生产环境构建
pnpm lint               # 代码检查
pnpm lint:fix           # 自动修复
pnpm type-check         # 类型检查
pnpm test               # 运行测试
pnpm clean              # 清理构建产物
```

### 单独开发模板

```bash
# React Vite
cd packages/react-vite
pnpm dev

# Vue3 Vite
cd packages/vue3-vite
pnpm dev

# React Next.js
cd packages/react-next
pnpm dev
```

## 📚 详细文档

- [Monorepo 管理指南](./MONOREPO.md) - 详细的项目架构和使用说明
- [模板配置文件](./templates.json) - 完整的模板信息和版本配置

## 🔧 模板信息查询

```bash
# 查看所有模板信息
node scripts/list-templates.js

# 直接查看模板配置
cat templates.json
```

## 🔧 配置特性

### 统一配置
- Prettier 代码格式化
- TypeScript 类型检查
- ESLint 代码规范
- 统一的构建和测试流程

### 依赖管理
- pnpm workspace 统一管理
- 共享依赖自动去重
- 独立的包版本控制

### 开发体验
- 并行开发服务器
- 热重载支持
- 统一的命令接口
- 自动化测试和构建

## 📝 添加新模板

1. 在 `packages/` 目录创建新模板
2. 初始化 `package.json` 和项目结构
3. 配置构建和开发脚本
4. 更新文档和测试脚本
5. 提交 PR 进行审核

## 📄 许可证

MIT License