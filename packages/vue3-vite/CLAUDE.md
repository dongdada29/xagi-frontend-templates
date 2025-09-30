# Vue 3 Vite Template - Claude 开发指南

## 项目概述
这是一个现代化的 Vue 3 + Vite + TypeScript 项目模板，针对 Claude AI 助手进行了优化配置。

## 核心特性
- ⚡️ 快速开发体验 (Vite 热重载)
- 🔒 类型安全 (TypeScript)
- 🎨 Composition API
- 🌐 HTTP 客户端 (Axios)
- 📦 完整的项目结构

## 开发环境设置
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

## Claude 优化配置
- VS Code 设置已优化 GitHub Copilot 集成
- Cursor 配置已包含在 `.cursorrules`
- Volar 插件配置已优化
- TypeScript 严格模式启用

## 组件开发模式
```vue
<script setup lang="ts">
interface Props {
  title: string
  items: Item[]
  onAction?: (id: string) => void
}

const props = defineProps<Props>()
const emit = defineEmits<{
  action: [id: string]
}>()

const handleClick = (id: string) => {
  emit('action', id)
}
</script>

<template>
  <div class="component">
    <h2>{{ props.title }}</h2>
    <!-- 组件内容 -->
  </div>
</template>

<style scoped>
.component {
  /* 组件样式 */
}
</style>
```

## API 集成模式
```typescript
// 在 services.ts 中定义新 API
export const exampleApi = {
  getData: (params: ListParams) => 
    api.get<ListResult<Data>>('/api/data', { params }),
  
  createItem: (data: CreateData) => 
    api.post<Data>('/api/data', data),
}
```

## Claude 提示词模板

### 功能开发
```
请为这个 Vue 3 项目开发一个 [功能名称] 功能：
- 使用 TypeScript 和 Composition API
- 遵循现有组件结构
- 使用 <script setup> 语法
- 添加到 src/components/ 目录
- 在 App.vue 中展示使用
- 包含必要的类型定义
```

### 问题排查
```
项目中遇到 [问题描述]：
- 错误信息：[具体错误]
- 相关代码：[代码片段]
- 预期行为：[期望结果]

请分析问题并提供解决方案。
```

## 项目约定
- 组件放在 `src/components/` 下
- API 定义在 `src/lib/services.ts`
- 工具函数在 `src/lib/utils.ts`
- 使用单文件组件(SFC)格式
- 所有文件必须使用 TypeScript

## 常用开发模式
```typescript
// 响应式数据
const count = ref(0)
const user = reactive({ name: 'John', age: 30 })

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 侦听器
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// 数据获取
const { data, loading, error } = useApi(() => api.getData(params))
```

## 性能优化建议
- 使用 shallowRef/shallowReactive 优化大对象
- 合理使用 computed 缓存
- 使用 v-memo 优化模板
- 异步组件懒加载
- 虚拟滚动长列表

## 调试技巧
- 使用 Vue DevTools
- 在 Chrome DevTools 中查看网络请求
- 使用 console.log 进行调试
- 使用 Vue 的 devtools 插件

## 最佳实践
1. **类型优先**: 为所有变量、函数参数、返回值添加类型
2. **Composition API**: 优先使用 `<script setup>` 语法
3. **响应式数据**: 合理选择 ref 和 reactive
4. **组件拆分**: 保持组件单一职责，便于维护
5. **性能优化**: 使用 Vue 3 的性能优化特性
6. **错误处理**: 添加适当的错误边界和错误处理

## Vue 3 特有技巧
```typescript
// 自定义组合式函数
function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}

// 使用模板引用
const inputRef = ref<HTMLInputElement>()
onMounted(() => {
  inputRef.value?.focus()
})
```