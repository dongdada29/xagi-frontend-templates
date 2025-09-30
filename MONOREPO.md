# XAGI Frontend Templates - Monorepo 管理指南

## 概述

本项目使用 pnpm workspace 来管理多个前端模板，采用 monorepo 架构统一维护。

## 项目结构

```
xagi-frontend-templates/
├── packages/                    # 所有模板包
│   ├── react-vite/             # React + Vite + TypeScript
│   ├── vue3-vite/              # Vue 3 + Vite + TypeScript  
│   └── react-next/             # React + Next.js + TypeScript + Tailwind CSS
├── scripts/                     # 管理脚本
│   ├── build-all.js            # 构建所有模板
│   └── test-all.js             # 测试所有模板
├── package.json                # 根包配置
├── pnpm-workspace.yaml         # pnpm workspace 配置
└── .prettierrc                 # 统一代码格式化配置
```

## 快速开始

### 1. 安装依赖

```bash
# 安装所有包的依赖
pnpm install

# 或使用脚本
node scripts/install-all.js
```

### 2. 开发模式

```bash
# 启动所有模板的开发服务器
pnpm dev

# 或单独启动某个模板
cd packages/react-vite
pnpm dev

cd packages/vue3-vite  
pnpm dev

cd packages/react-next
pnpm dev
```

### 3. 构建所有模板

```bash
# 构建所有模板
pnpm build

# 或使用脚本
node scripts/build-all.js
```

### 4. 测试所有模板

```bash
# 测试所有模板
node scripts/test-all.js
```

## 模板端口配置

- **React Vite**: `3000`
- **Vue3 Vite**: `4000`  
- **React Next.js**: `3000`

注意：React Vite 和 React Next.js 使用相同端口，不能同时运行。

## 可用命令

### 根级别命令

```bash
pnpm build              # 构建所有包
pnpm build:production   # 生产环境构建所有包
pnpm dev                # 启动所有开发服务器
pnpm lint               # 对所有包执行 lint 检查
pnpm lint:fix           # 自动修复所有包的 lint 问题
pnpm type-check         # 对所有包执行类型检查
pnpm test               # 运行所有包的测试
pnpm clean              # 清理所有包的构建产物
```

### 包级别命令

在具体包目录下：

```bash
# React Vite / Vue3 Vite
pnpm dev                 # 启动开发服务器
pnpm build              # 构建生产版本
pnpm preview             # 预览构建结果
pnpm type-check         # TypeScript 类型检查
pnpm clean              # 清理构建产物

# React Next.js
pnpm dev                # 启动开发服务器
pnpm build              # 构建生产版本
pnpm start              # 启动生产服务器
pnpm lint               # ESLint 检查
pnpm type-check         # TypeScript 类型检查
```

## 添加新模板

1. 在 `packages/` 目录下创建新的模板目录
2. 初始化包的 `package.json`
3. 在 `pnpm-workspace.yaml` 中添加新包（如果不在 `packages/*` 模式下）
4. 更新根 `package.json` 中的相关脚本（如果需要）
5. 更新此文档

## 共享配置

### 代码格式化

所有包使用统一的 Prettier 配置：

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### TypeScript 配置

每个模板都有独立的 TypeScript 配置，但遵循统一的配置标准。

## 依赖管理

### 添加依赖

```bash
# 为特定包添加依赖
pnpm --filter <package-name> add <dependency>

# 例如：为 React Vite 添加依赖
pnpm --filter @xagi-templates/react-vite add lodash
```

### 添加开发依赖

```bash
# 为特定包添加开发依赖
pnpm --filter <package-name> add -D <dependency>

# 例如：为所有包添加 TypeScript
pnpm --filter "*-vite" add -D typescript
```

### 升级依赖

```bash
# 升级所有包的依赖
pnpm update

# 升级特定包的依赖
pnpm --filter <package-name> update
```

## 构建产物

每个模板的构建产物位于：

- **React Vite**: `packages/react-vite/dist/`
- **Vue3 Vite**: `packages/vue3-vite/dist/`
- **React Next.js**: `packages/react-next/.next/`

## 发布说明

当前所有包都标记为 `private: true`，用于模板开发而非 npm 发布。

## 故障排除

### 常见问题

1. **依赖冲突**
   ```bash
   pnpm install --force
   ```

2. **端口占用**
   - 修改对应模板的 `vite.config.ts` 或 Next.js 配置中的端口
   - 或使用不同的端口分别启动

3. **TypeScript 错误**
   ```bash
   pnpm type-check
   # 查看具体的类型错误
   ```

### 清理和重置

```bash
# 清理所有构建产物
pnpm clean

# 重置所有依赖
rm -rf node_modules packages/*/node_modules
pnpm install
```