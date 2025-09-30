# React Vite Template - Claude 开发指南

## 项目概述
这是一个现代化的 React 18 + Vite + TypeScript 项目模板，针对 Claude AI 助手进行了优化配置。

## 核心特性
- ⚡️ 快速开发体验 (Vite 热重载)
- 🔒 类型安全 (TypeScript)
- 🎨 现代样式 (Tailwind CSS)
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
- ESLint 和 Prettier 预配置
- TypeScript 严格模式启用

## 组件开发模式
```typescript
// 创建新组件时的标准模式
interface ComponentProps {
  title: string;
  items: Item[];
  onAction?: (id: string) => void;
}

export const Component: React.FC<ComponentProps> = ({ title, items, onAction }) => {
  return (
    <div className="component">
      <h2>{title}</h2>
      {/* 组件内容 */}
    </div>
  );
};
```

## API 集成模式
```typescript
// 在 services.ts 中定义新 API
export const exampleApi = {
  getData: (params: ListParams) => 
    api.get<ListResult<Data>>('/api/data', { params }),
  
  createItem: (data: CreateData) => 
    api.post<Data>('/api/data', data),
};
```

## Claude 提示词模板

### 功能开发
```
请为这个 React Vite 项目开发一个 [功能名称] 功能：
- 使用 TypeScript 和 Tailwind CSS
- 遵循现有组件结构
- 添加到 src/components/ 目录
- 在 App.tsx 中展示使用
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
- 样式优先使用 Tailwind CSS
- 所有文件必须使用 TypeScript

## 常用开发模式
```typescript
// 数据获取
const { data, loading, error } = useApi(() => api.getData(params));

// 状态管理
const [state, setState] = useState<DataType>(initialValue);

// 事件处理
const handleClick = (id: string) => {
  onAction?.(id);
};
```

## 性能优化建议
- 使用 React.memo 优化纯组件
- 合理使用 useCallback/useMemo
- 避免不必要的重新渲染
- 代码分割和懒加载

## 调试技巧
- 使用 React Developer Tools
- 在 Chrome DevTools 中查看网络请求
- 使用 console.log 进行调试
- 设置断点进行逐步调试

## 最佳实践
1. **类型优先**: 为所有变量、函数参数、返回值添加类型
2. **组件拆分**: 保持组件单一职责，便于维护
3. **状态管理**: 选择合适的状态管理方案
4. **错误处理**: 添加适当的错误边界和错误处理
5. **性能优化**: 定期检查和优化组件性能