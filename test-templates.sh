#!/bin/bash

# XAGI Frontend Templates Test Script
# 测试所有模板项目是否能正常运行

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 测试结果统计
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# 模板目录
TEMPLATES_DIR="."

# 备份函数
backup_configs() {
    log_info "备份原始配置文件..."
    
    # 备份 vite.config.ts 文件
    if [ -f "react-vite/vite.config.ts" ]; then
        cp "react-vite/vite.config.ts" "react-vite/vite.config.ts.backup"
    fi
    
    if [ -f "vue3-vite/vite.config.ts" ]; then
        cp "vue3-vite/vite.config.ts" "vue3-vite/vite.config.ts.backup"
    fi
    
    log_success "配置文件备份完成"
}

# 还原函数
restore_configs() {
    log_info "还原原始配置文件..."
    
    # 还原 vite.config.ts 文件
    if [ -f "react-vite/vite.config.ts.backup" ]; then
        mv "react-vite/vite.config.ts.backup" "react-vite/vite.config.ts"
    fi
    
    if [ -f "vue3-vite/vite.config.ts.backup" ]; then
        mv "vue3-vite/vite.config.ts.backup" "vue3-vite/vite.config.ts"
    fi
    
    log_success "配置文件还原完成"
}

# 测试模板函数
test_template() {
    local template_name=$1
    local template_dir=$2
    local dev_command=$3
    local build_command=$4
    local max_wait=${5:-30}  # 默认等待30秒
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    log_info "测试模板: $template_name"
    log_info "目录: $template_dir"
    log_info "开发命令: $dev_command"
    log_info "构建命令: $build_command"
    
    # 检查目录是否存在
    if [ ! -d "$template_dir" ]; then
        log_error "模板目录不存在: $template_dir"
        FAILED_TESTS=$((FAILED_TESTS + 1))
        return 1
    fi
    
    # 进入模板目录
    cd "$template_dir"
    
    # 检查 package.json 是否存在
    if [ ! -f "package.json" ]; then
        log_error "package.json 不存在: $template_dir"
        cd ..
        FAILED_TESTS=$((FAILED_TESTS + 1))
        return 1
    fi
    
    # 安装依赖
    log_info "安装依赖..."
    if npm install; then
        log_success "依赖安装成功"
    else
        log_error "依赖安装失败"
        cd ..
        FAILED_TESTS=$((FAILED_TESTS + 1))
        return 1
    fi
    
    # 测试开发服务器启动
    log_info "测试开发服务器启动..."
    
    # 启动开发服务器（后台运行）
    nohup $dev_command > dev-server.log 2>&1 &
    DEV_PID=$!
    
    # 等待服务器启动
    log_info "等待服务器启动 (最长等待 ${max_wait}秒)..."
    sleep_count=0
    server_started=false
    
    while [ $sleep_count -lt $max_wait ]; do
        if [ -f "dev-server.log" ] && grep -q "ready\|started\|running\|localhost" dev-server.log; then
            log_success "开发服务器启动成功"
            server_started=true
            break
        fi
        sleep 1
        sleep_count=$((sleep_count + 1))
        echo -n "."
    done
    
    echo ""
    
    # 停止开发服务器
    if [ $server_started = true ]; then
        log_info "停止开发服务器..."
        kill $DEV_PID 2>/dev/null || true
        wait $DEV_PID 2>/dev/null || true
        PASSED_TESTS=$((PASSED_TESTS + 1))
        log_success "开发服务器测试通过"
    else
        log_error "开发服务器启动超时或失败"
        kill $DEV_PID 2>/dev/null || true
        FAILED_TESTS=$((FAILED_TESTS + 1))
        log_warning "查看开发服务器日志: $template_dir/dev-server.log"
    fi
    
    # 测试构建
    log_info "测试项目构建..."
    if [ -n "$build_command" ]; then
        if $build_command; then
            log_success "项目构建成功"
        else
            log_error "项目构建失败"
            cd ..
            FAILED_TESTS=$((FAILED_TESTS + 1))
            return 1
        fi
    fi
    
    # 清理
    log_info "清理构建文件..."
    if [ -d "dist" ]; then
        rm -rf dist
    fi
    if [ -d ".next" ]; then
        rm -rf .next
    fi
    if [ -d "node_modules" ]; then
        rm -rf node_modules
    fi
    
    # 返回上级目录
    cd ..
    
    log_success "模板测试完成: $template_name"
    echo "----------------------------------------"
}

# 主函数
main() {
    log_info "开始测试 XAGI Frontend Templates"
    log_info "测试时间: $(date)"
    echo "========================================"
    
    # 备份配置
    backup_configs
    
    # 测试所有模板
    log_info "开始测试 React Next.js 模板..."
    test_template "React Next.js" "react-next" "npm run dev" "npm run build" 40
    
    log_info "开始测试 React Vite 模板..."
    test_template "React Vite" "react-vite" "npm run dev" "npm run build" 30
    
    log_info "开始测试 Vue3 Vite 模板..."
    test_template "Vue3 Vite" "vue3-vite" "npm run dev" "npm run build" 30
    
    # 还原配置
    restore_configs
    
    # 输出测试结果
    echo "========================================"
    log_info "测试结果汇总"
    log_info "总测试数: $TOTAL_TESTS"
    log_success "通过测试: $PASSED_TESTS"
    if [ $FAILED_TESTS -gt 0 ]; then
        log_error "失败测试: $FAILED_TESTS"
    else
        log_success "失败测试: $FAILED_TESTS"
    fi
    
    # 计算成功率
    if [ $TOTAL_TESTS -gt 0 ]; then
        success_rate=$((PASSED_TESTS * 100 / TOTAL_TESTS))
        log_info "成功率: $success_rate%"
    fi
    
    echo "========================================"
    
    # 根据测试结果退出
    if [ $FAILED_TESTS -gt 0 ]; then
        log_error "部分模板测试失败"
        exit 1
    else
        log_success "所有模板测试通过"
        exit 0
    fi
}

# 脚本选项
case "${1:-}" in
    "backup")
        backup_configs
        ;;
    "restore")
        restore_configs
        ;;
    "test")
        backup_configs
        main
        ;;
    *)
        main
        ;;
esac