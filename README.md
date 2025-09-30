# XAGI Frontend Templates

这个仓库包含了 XAGI Frontend MCP 服务器使用的各种前端项目模板。

## 可用模板

### React + Vite
- **路径**: `react-vite/`
- **描述**: 基于 React 18 + Vite 的现代化前端项目模板
- **特性**:
  - TypeScript 支持
  - 热重载开发服务器
  - 现代化的构建工具链
  - 响应式设计
  - **内置 HTTP 客户端解决方案**
  - 基于 Axios 的统一请求管理
  - React Hooks 封装
  - 自动 token 管理
  - 统一的错误处理

### Vue3 + Vite
- **路径**: `vue3-vite/`
- **描述**: 基于 Vue 3 + Vite 的现代化前端项目模板
- **特性**:
  - Composition API
  - TypeScript 支持
  - 单文件组件 (SFC)
  - 快速热重载
  - **内置 HTTP 客户端解决方案**
  - 基于 Axios 的统一请求管理
  - Vue 3 Composition API 封装
  - 自动 token 管理
  - 统一的错误处理

### React + Next.js
- **路径**: `react-next/`
- **描述**: 基于 Next.js 14 + React 18 + Tailwind CSS 的全栈应用模板
- **特性**:
  - Next.js 14 App Router
  - React 18 最新特性
  - TypeScript 完整支持
  - Tailwind CSS 样式系统
  - 无样式 UI 组件库
  - SEO 优化
  - 性能优化
  - **内置 HTTP 客户端解决方案**
  - 基于 Axios 的统一请求管理
  - React Hooks 封装
  - 自动 token 管理
  - 统一的错误处理
  - 支持 Server Components

## 使用方法

这些模板通过 XAGI Frontend MCP 服务器自动下载和使用。MCP 服务器会：

1. 从 GitHub 下载最新的模板文件
2. 解压到指定目录
3. 替换模板中的占位符变量
4. 自动安装依赖

## 模板变量

模板支持以下占位符变量（格式：`${{变量名}}`）：

- `{{projectName}}` - 项目名称
- `{{description}}` - 项目描述
- `{{author}}` - 作者名称
- `{{version}}` - 版本号

## HTTP 客户端使用说明

所有模板都内置了完整的 HTTP 客户端解决方案，支持快速接入后端 API：

### 核心特性
- **基于 Axios**: 统一的 HTTP 客户端
- **类型安全**: 完整的 TypeScript 支持
- **错误处理**: 统一的错误处理机制
- **拦截器**: 请求/响应拦截器
- **认证**: 自动 token 管理
- **框架适配**: 针对不同框架的优化封装

### 文件结构
```
src/lib/
├── api.ts          # HTTP 客户端核心配置
└── services.ts     # API 接口定义和封装
```

### 使用示例

#### React 模板
```typescript
import { userApi, useApi } from './lib/services';

// 使用自定义 Hook
const { data: userInfo, loading, error } = useApi(() => userApi.getUserInfo());

// 直接调用
const handleLogin = async () => {
  try {
    const result = await userApi.login({ username: 'demo', password: '123456' });
    console.log('登录成功:', result);
  } catch (error) {
    console.error('登录失败:', error);
  }
};
```

#### Vue 3 模板
```typescript
import { userApi, useApi } from './lib/services';

// 使用 Composition API Hook
const { data, loading, error } = useApi(() => userApi.getUserInfo(), true);

// 直接调用
const handleLogin = async () => {
  try {
    const result = await userApi.login({ username: 'demo', password: '123456' });
    console.log('登录成功:', result);
  } catch (error) {
    console.error('登录失败:', error);
  }
};
```

#### Next.js 模板
```typescript
import { userApi, useApi, handleApiResponse } from './lib/services';

// 客户端组件使用
const { data: userInfo, loading, error } = useApi(() => userApi.getUserInfo());

// 服务端组件使用
export default async function ServerComponent() {
  const result = await handleApiResponse(userApi.getUserInfo());
  
  if (!result.success) {
    return <div>加载失败: {result.error}</div>;
  }
  
  return <div>用户信息: {result.data.username}</div>;
}
```

### API 配置
- **基础 URL**: 默认 `/api`，可在 `api.ts` 中修改
- **超时时间**: 默认 10 秒
- **认证方式**: Bearer Token（从 localStorage 自动获取）
- **响应格式**: 统一的 `{ code, data, message }` 格式

## 添加新模板

要添加新模板：

1. 在根目录创建新的模板文件夹
2. 添加 `meta.json` 文件描述模板信息
3. 确保 HTTP 客户端解决方案包含在模板中
4. 提交到仓库

## 许可证

MIT License
