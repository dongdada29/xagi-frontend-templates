<!-- 5c033265-c28a-4f14-ac04-79568d92084e d250bece-1750-4392-b9e0-eba86e737a23 -->
# 添加 Radix UI 组件到模板

## 第一阶段: react-next 模板

### 1. 更新依赖包

在 `packages/react-next/package.json` 中添加缺失的 Radix UI 依赖:

- @radix-ui/react-accordion
- @radix-ui/react-alert-dialog
- @radix-ui/react-aspect-ratio
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-collapsible
- @radix-ui/react-icons
- @radix-ui/react-label
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slider
- @radix-ui/react-switch
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group

已有组件(保留):

- @radix-ui/react-dialog ✓
- @radix-ui/react-dropdown-menu ✓
- @radix-ui/react-slot ✓
- @radix-ui/react-tabs ✓
- @radix-ui/react-toast ✓
- @radix-ui/react-tooltip ✓

### 2. 添加配置文件

在 `packages/react-next/` 目录下添加:

- **components.json**: shadcn/ui 配置文件,设置组件路径别名和样式
- **biome.json**: Biome 代码检查配置(可选,补充 ESLint)

### 3. 创建新的 UI 组件文件

在 `packages/react-next/src/components/ui/` 目录下创建以下组件:

**需要创建的组件**:

- accordion.tsx
- alert-dialog.tsx
- aspect-ratio.tsx
- avatar.tsx
- checkbox.tsx
- collapsible.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- scroll-area.tsx
- select.tsx
- separator.tsx
- slider.tsx
- switch.tsx
- toggle.tsx
- toggle-group.tsx

**已有组件(重新创建以匹配新风格)**:

- button.tsx (重新创建)
- card.tsx (重新创建)
- dialog.tsx (重新创建)
- dropdown-menu.tsx (重新创建)
- input.tsx (重新创建)
- tabs.tsx (重新创建)
- textarea.tsx (重新创建)
- tooltip.tsx (重新创建)

所有组件将使用:

- TypeScript 类型定义
- Radix UI 原语封装
- Tailwind CSS 样式
- class-variance-authority 进行样式变体管理
- cn() 工具函数进行类名合并
- forwardRef 支持 ref 传递
- 详细的中文注释

## 第二阶段: react-vite 模板

### 1. 创建目录结构

创建 `packages/react-vite/src/components/ui/` 目录

### 2. 添加配置文件

在 `packages/react-vite/` 目录下添加:

- **components.json**: shadcn/ui 配置文件,设置组件路径别名和样式
- **biome.json**: Biome 代码检查配置(可选,补充 ESLint)

### 3. 更新依赖包

在 `packages/react-vite/package.json` 中添加所有 Radix UI 依赖(与参考 package.json 相同的完整列表)

### 4. 复制所有 UI 组件

将 react-next 模板中创建的所有 UI 组件文件复制到 react-vite 模板的 `src/components/ui/` 目录

## 实施细节

### 组件实现标准

每个组件文件包含:

1. 导入必要的 React 和 Radix UI 依赖
2. 导入 cn 工具函数
3. TypeScript 接口定义
4. forwardRef 包装的组件实现
5. 使用 Tailwind CSS 类进行样式化
6. displayName 设置
7. 导出所有子组件和类型

### 示例组件结构

```typescript
import * as React from "react"
import * as PrimitiveName from "@radix-ui/react-primitive-name"
import { cn } from "@/lib/utils"

const Component = React.forwardRef<
  React.ElementRef<typeof PrimitiveName.Root>,
  React.ComponentPropsWithoutRef<typeof PrimitiveName.Root>
>(({ className, ...props }, ref) => (
  <PrimitiveName.Root
    ref={ref}
    className={cn("base-styles", className)}
    {...props}
  />
))
Component.displayName = PrimitiveName.Root.displayName

export { Component }
```

### 依赖版本

使用参考 package.json 中的版本号:

- @radix-ui/react-* 使用最新稳定版本
- 确保与 React 18 兼容

## 第三阶段: Form 表单方案集成

### 1. 添加 Form 相关依赖

在两个模板的 package.json 中添加:

- react-hook-form (^7.56.1)
- @hookform/resolvers (^5.2.2)
- zod (^3.24.3)

### 2. 创建 Form 组件

在 `src/components/ui/` 目录创建:

- **form.tsx**: 基于 React Hook Form 的表单组件
- **label.tsx**: 表单标签组件(已在 Radix UI 组件列表中)

Form 组件包含:

- Form
- FormField
- FormItem
- FormLabel
- FormControl
- FormDescription
- FormMessage

### 3. 创建示例表单

在两个模板中创建表单使用示例,展示:

- 表单验证(使用 Zod)
- 错误处理
- 提交处理
- 与 Radix UI 组件集成(Input, Select, Checkbox 等)

## 第四阶段: 更新文档

### 1. 更新 AGENTS.md

在两个模板的 AGENTS.md 中添加:

- Form 表单开发指南
- 表单验证最佳实践
- 完整的 Radix UI 组件列表
- 表单组件使用示例

### 2. 更新 CLAUDE.md

在两个模板的 CLAUDE.md 中添加:

- Form 组件生成提示词模板
- 表单验证模式示例
- React Hook Form + Zod 集成模式
- 常见表单场景的代码示例

### 3. 文档更新内容

**AGENTS.md 新增章节**:

```markdown
### Form Development
- React Hook Form for form state management
- Zod for schema validation
- Integration with Radix UI components
- Error handling and display patterns

### Available Components
- All 27 Radix UI components (完整列表)
- Form components (Form, FormField, FormItem, etc.)
- Custom input components with validation
```

**CLAUDE.md 新增章节**:

```markdown
#### For Form Development
Claude, create a form using React Hook Form and Zod:
1. Define Zod schema for validation
2. Use Form components from src/components/ui/form.tsx
3. Integrate with Radix UI input components
4. Implement proper error handling
5. Add submit handler with loading states
```

### To-dos

- [ ] 更新 react-next/package.json 添加所有缺失的 Radix UI 依赖包
- [ ] 在 react-next/src/components/ui/ 创建所有新的 Radix UI 组件文件(19个新组件)
- [ ] 重新创建 react-next 中已有的8个组件以匹配新风格
- [ ] 为 react-vite 创建 src/components/ui/ 目录结构
- [ ] 更新 react-vite/package.json 添加所有 Radix UI 依赖包
- [ ] 将所有 UI 组件从 react-next 复制到 react-vite 模板
- [ ] 运行 pnpm install 安装新添加的依赖包