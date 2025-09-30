#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const packages = [
  'packages/react-vite',
  'packages/vue3-vite',
  'packages/react-next'
];

console.log('🚀 开始构建所有模板...\n');

packages.forEach((pkg, index) => {
  console.log(`[${index + 1}/${packages.length}] 构建 ${pkg}...`);
  
  try {
    // 清理之前的构建
    if (fs.existsSync(path.join(pkg, 'dist')) || fs.existsSync(path.join(pkg, '.next'))) {
      execSync(`cd ${pkg} && npm run clean`, { stdio: 'inherit' });
    }
    
    // 执行构建
    execSync(`cd ${pkg} && npm run build`, { stdio: 'inherit' });
    console.log(`✅ ${pkg} 构建成功\n`);
  } catch (error) {
    console.error(`❌ ${pkg} 构建失败:`, error.message);
    process.exit(1);
  }
});

console.log('🎉 所有模板构建完成！');