# PNPM 使用指南

## 🚨 重要提醒

**本项目强制要求使用 pnpm 作为包管理器！**

- ❌ **禁止使用** `npm` 或 `yarn`
- ✅ **必须使用** `pnpm`

## 安装 pnpm

### 方法一：使用 npm 安装
```bash
npm install -g pnpm
```

### 方法二：使用官方安装脚本
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 方法三：使用 Homebrew (macOS)
```bash
brew install pnpm
```

## 常用命令

```bash
# 安装依赖
pnpm install

# 添加依赖
pnpm add <package-name>

# 添加开发依赖
pnpm add -D <package-name>

# 移除依赖
pnpm remove <package-name>

# 更新依赖
pnpm update

# 运行脚本
pnpm dev
pnpm build
pnpm lint
```

## 项目特定命令

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 代码检查
pnpm lint
pnpm lint:fix

# 类型检查
pnpm type-check

# 代码格式化
pnpm format
pnpm format:check
```

## 为什么使用 pnpm？

1. **🚀 更快的安装速度** - 比 npm 快 2-3 倍
2. **💾 节省磁盘空间** - 使用硬链接共享依赖
3. **🔒 更严格的依赖管理** - 避免幽灵依赖问题
4. **📦 更好的 monorepo 支持** - 原生支持 workspace
5. **🛡️ 更安全** - 严格的依赖解析，避免安全漏洞

## 故障排除

### 如果遇到权限问题
```bash
# 设置 pnpm 全局目录
pnpm config set global-dir ~/.pnpm-global
pnpm config set global-bin-dir ~/.pnpm-global/bin
```

### 如果遇到缓存问题
```bash
# 清理 pnpm 缓存
pnpm store prune
```

### 如果遇到依赖问题
```bash
# 删除 node_modules 和 lockfile，重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

**记住：始终使用 pnpm！** 🎯
