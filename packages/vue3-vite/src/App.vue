<script setup lang="ts">
// 示例提示数据
interface ExamplePrompt {
  text: string;
  icon: string;
}

// 步骤数据
interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const examplePrompts: ExamplePrompt[] = [
  { text: '制作登录页面', icon: '🔐' },
  { text: '添加商品列表', icon: '📦' },
  { text: '制作购物车', icon: '🛒' },
  { text: '创建仪表盘', icon: '📊' },
  { text: '设计用户资料页', icon: '👤' },
  { text: '构建表单系统', icon: '📝' },
];

const steps: Step[] = [
  {
    number: '1',
    title: '说出想法',
    description: '在左下角对话框输入您的需求',
    icon: '💬',
  },
  {
    number: '2',
    title: 'AI 制作',
    description: 'AI 自动制作网页功能',
    icon: '🤖',
  },
  {
    number: '3',
    title: '查看效果',
    description: '立即看到制作结果',
    icon: '✨',
  },
];
</script>

<template>
  <div class="welcome-page">
    <div class="container">
      <!-- 标题区域 -->
      <div class="header">
        <h1 class="title">应用页面开发助手</h1>
        <p class="subtitle">
          让智能助手帮您快速创建网页应用，只需简单描述，即刻生成专业页面
        </p>
      </div>

      <!-- 使用步骤 -->
      <div class="steps-section">
        <h2 class="section-title">简单三步开始</h2>
        <div class="steps-container">
          <div v-for="(step, index) in steps" :key="index" class="step-item">
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <span class="step-icon">{{ step.icon }}</span>
              <h3 class="step-title">{{ step.title }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- 示例提示 -->
      <div class="examples-section">
        <h3 class="examples-title">试试这样说</h3>
        <div class="examples-grid">
          <div
            v-for="(prompt, index) in examplePrompts"
            :key="index"
            class="example-card"
          >
            <div class="example-content">
              <span class="example-icon">{{ prompt.icon }}</span>
              <span class="example-text">"{{ prompt.text }}"</span>
            </div>
          </div>
        </div>
        <p class="examples-hint">示例仅供参考，可输入您自己的需求</p>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <p class="footer-text">智能页面开发助手 | 专为现代 Web 开发设计</p>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #ffffff, #f3e8ff);
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding: 24px 16px;
}

@media (min-width: 640px) {
  .container {
    padding: 32px 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 48px 24px;
  }
}

/* 标题区域 */
.header {
  text-align: center;
  margin-bottom: 32px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  background: linear-gradient(to right, #2563eb, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 640px) {
  .title {
    font-size: 30px;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 36px;
  }
}

.subtitle {
  font-size: 16px;
  color: #475569;
  margin-bottom: 24px;
}

@media (min-width: 640px) {
  .subtitle {
    font-size: 18px;
  }
}

/* 步骤区域 */
.steps-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  text-align: center;
}

@media (min-width: 640px) {
  .section-title {
    font-size: 20px;
  }
}

.steps-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

@media (min-width: 640px) {
  .steps-container {
    flex-direction: row;
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .steps-container {
    gap: 32px;
  }
}

.step-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.step-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: #dbeafe;
  color: #2563eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

.step-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.step-icon {
  font-size: 20px;
}

.step-title {
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
  margin: 0;
}

/* 示例区域 */
.examples-section {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
  .examples-section {
    padding: 24px;
  }
}

.examples-title {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  text-align: center;
}

@media (min-width: 640px) {
  .examples-title {
    font-size: 18px;
  }
}

.examples-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 640px) {
  .examples-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .examples-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.example-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.example-card:hover {
  border-color: #93c5fd;
  background-color: #eff6ff;
}

.example-content {
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.example-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.example-text {
  font-size: 14px;
  color: #334155;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.examples-hint {
  font-size: 12px;
  color: #64748b;
  margin-top: 16px;
  text-align: center;
}

/* 页脚 */
.footer {
  text-align: center;
  padding: 12px 16px;
  border-top: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}

@media (min-width: 640px) {
  .footer {
    padding: 16px;
  }
}

.footer-text {
  font-size: 12px;
  color: #475569;
  margin: 0;
}

@media (min-width: 640px) {
  .footer-text {
    font-size: 14px;
  }
}
</style>