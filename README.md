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

### Vue3 + Vite
- **路径**: `vue3-vite/`
- **描述**: 基于 Vue 3 + Vite 的现代化前端项目模板
- **特性**:
  - Composition API
  - TypeScript 支持
  - 单文件组件 (SFC)
  - 快速热重载

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

## 添加新模板

要添加新模板：

1. 在根目录创建新的模板文件夹
2. 添加 `meta.json` 文件描述模板信息
3. 提交到仓库

## 许可证

MIT License
