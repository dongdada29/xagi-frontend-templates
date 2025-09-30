# Vue 3 Vite Template - AI Agent 开发指南

## 项目概述
这是一个基于 Vue 3 + Vite + TypeScript 的现代化前端项目模板，专为 AI 代码开发助手优化。

## 技术栈
- **框架**: Vue 3
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: CSS + 可选Tailwind CSS
- **HTTP客户端**: Axios
- **包管理**: pnpm (强制要求)
- **推荐IDE插件**: Volar

## 项目结构
```
src/
├── components/     # 组件目录
├── lib/           # 工具库和配置
│   ├── api.ts     # HTTP客户端配置
│   └── services.ts # API接口定义
├── App.vue        # 根组件
├── main.ts        # 应用入口
└── style.css      # 全局样式
```

## 开发命令
```bash
pnpm run dev          # 启动开发服务器
pnpm run build        # 构建生产版本
pnpm run preview      # 预览生产版本
```

## 包管理要求
- **必须使用 pnpm** 作为包管理器
- **禁止使用 npm 或 yarn** 进行依赖管理
- **安装依赖**: `pnpm install`
- **开发服务器**: `pnpm dev`
- **构建**: `pnpm build`

## 代码规范
- 使用 Vue 3 Composition API (<script setup>)
- 使用 TypeScript 严格模式
- 遵循单文件组件(SFC)最佳实践
- 组件文件使用 PascalCase 命名
- 工具函数使用 camelCase 命名

## 组件开发规则
- 优先使用 `<script setup>` 语法
- 使用 ref/reactive 管理响应式数据
- 使用 computed 计算属性
- 使用 watch/watchEffect 侦听器
- 组件 props 必须定义类型
- 使用 defineProps 和 defineEmits
- 合理使用 slots

## 响应式数据规则
1. 基本类型使用 ref
2. 对象类型使用 reactive
3. 复杂数据考虑使用 shallowRef/shallowReactive
4. 计算属性使用 computed
5. 侦听器使用 watch/watchEffect

## 组件通信规则
1. Props 父传子
2. Emits 子传父
3. provide/inject 跨层级通信
4. 事件总线（简单场景）
5. Pinia 状态管理（复杂场景）

## API 调用
1. 使用 `src/lib/api.ts` 中的 HTTP 客户端
2. 在 `src/lib/services.ts` 中定义 API 接口
3. 统一错误处理
4. 使用 async/await 语法
5. 考虑在 Vue 组件中的响应式处理

## 样式开发规则
1. 使用 scoped 样式避免污染
2. 合理使用 CSS 变量
3. 响应式设计优先
4. 考虑 CSS 模块化
5. 动画使用 Vue Transition

## 常用依赖
- `vue` - Vue 核心库
- `axios` - HTTP 客户端
- `typescript` - TypeScript 支持
- `@vitejs/plugin-vue` - Vue 3 SFC 支持
- `vue-tsc` - Vue TypeScript 编译器

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
- 优先考虑 Composition API
- 合理使用响应式数据
- 保持组件单一职责
- 遵循 Vue 3 最佳实践
- 考虑性能优化
- 保持代码风格一致
- 使用 TypeScript 提升代码质量