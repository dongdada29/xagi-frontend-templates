#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 读取 templates.json
const templatesPath = path.join(__dirname, '../templates.json');
const templates = JSON.parse(fs.readFileSync(templatesPath, 'utf8'));

console.log('📦 XAGI Frontend Templates\n');
console.log(`版本: ${templates.version}`);
console.log(`更新时间: ${templates.updatedAt}`);
console.log(`模板数量: ${templates.templates.length}\n`);

// 显示所有模板
templates.templates.forEach((template, index) => {
  console.log(`${index + 1}. ${template.name}`);
  console.log(`   包名: ${template.packageName}`);
  console.log(`   版本: ${template.version}`);
  console.log(`   框架: ${template.framework} + ${template.buildTool}`);
  console.log(`   端口: ${template.port}`);
  console.log(`   路径: ${template.path}`);
  console.log(`   描述: ${template.description}`);
  console.log();
});

console.log('🔧 公共特性:');
templates.commonFeatures.forEach(feature => {
  console.log(`   • ${feature}`);
});

console.log('\n📋 使用方法:');
console.log('   Monorepo 模式: pnpm install && pnpm dev');
console.log('   单独使用: cd packages/<template-name> && npm install && npm run dev');

console.log('\n📚 更多信息:');
console.log(`   文档: ${templates.support.documentation}`);
console.log(`   问题反馈: ${templates.support.issues}`);