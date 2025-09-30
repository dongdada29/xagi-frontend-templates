#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const packages = [
  { name: 'React Vite', path: 'packages/react-vite', port: 3000 },
  { name: 'Vue3 Vite', path: 'packages/vue3-vite', port: 4000 },
  { name: 'React Next.js', path: 'packages/react-next', port: 3000 }
];

console.log('🧪 开始测试所有模板...\n');

packages.forEach((pkg, index) => {
  console.log(`[${index + 1}/${packages.length}] 测试 ${pkg.name} (${pkg.path})...`);
  
  try {
    // 由于已经使用workspace管理，只需要测试构建
    console.log('  🔨 测试构建...');
    execSync(`cd ${pkg.path} && pnpm build`, { stdio: 'inherit' });
    
    console.log(`✅ ${pkg.name} 测试通过\n`);
  } catch (error) {
    console.error(`❌ ${pkg.name} 测试失败:`, error.message);
    process.exit(1);
  }
});

console.log('🎉 所有模板测试完成！');