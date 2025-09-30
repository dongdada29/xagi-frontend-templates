# React Vite Template - AI Agent 开发指南

## 项目概述
这是一个基于 React 18 + Vite + TypeScript 的现代化前端项目模板，专为 AI 代码开发助手优化。

## 技术栈
- **框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **HTTP客户端**: Axios
- **包管理**: pnpm (强制要求)

## 项目结构
```
src/
├── components/     # 组件目录
│   └── ui/        # 基础UI组件
├── lib/           # 工具库和配置
│   ├── api.ts     # HTTP客户端配置
│   ├── services.ts # API接口定义
│   └── utils.ts   # 工具函数
├── App.tsx        # 根组件
├── main.tsx       # 应用入口
└── index.css      # 全局样式
```

## 开发命令
```bash
pnpm run dev          # 启动开发服务器
pnpm run build        # 构建生产版本
pnpm run preview      # 预览生产版本
pnpm run lint         # 运行ESLint检查
```

## 包管理要求
- **必须使用 pnpm** 作为包管理器
- **禁止使用 npm 或 yarn** 进行依赖管理
- **安装依赖**: `pnpm install`
- **开发服务器**: `pnpm dev`
- **构建**: `pnpm build`

## 代码规范
- 使用 TypeScript 严格模式
- 遵循 React 函数组件最佳实践
- 使用 Tailwind CSS 进行样式设计
- 组件文件使用 PascalCase 命名
- 工具函数使用 camelCase 命名

## 组件开发规则
1. 优先使用函数组件
2. 使用 React Hooks 管理状态
3. 组件 props 必须定义类型
4. 使用 React.memo 优化性能
5. 合理拆分组件，保持单一职责

## 状态管理
1. 优先使用 useState/useReducer
2. 全局状态使用 Context API
3. 复杂状态考虑使用状态管理库
4. 避免不必要的状态提升

## API 调用
1. 使用 `src/lib/api.ts` 中的 HTTP 客户端
2. 在 `src/lib/services.ts` 中定义 API 接口
3. 统一错误处理
4. 使用 async/await 语法

## 样式开发
1. 优先使用 Tailwind CSS 类
2. 自定义样式使用 CSS Modules
3. 保持样式的一致性
4. 响应式设计优先

## 常用依赖
- `react` - React 核心库
- `react-dom` - React DOM 渲染器
- `axios` - HTTP 客户端
- `tailwindcss` - CSS 框架
- `typescript` - TypeScript 支持

## Git 提交规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式化
refactor: 重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## AI 开发提示
- 优先考虑代码可读性和维护性
- 遵循项目现有架构和设计模式
- 适当添加代码注释
- 考虑性能和安全性
- 保持代码风格一致