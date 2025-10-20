import './App.css';

function App() {
  return (
    <div className='app-container'>
      {/* 主标题区域 */}
      <div className='hero-section'>
        <h1 className='main-title'>🚀 AI 智能开发助手</h1>
        <p className='subtitle'>让 AI 帮您快速创建网页应用</p>
      </div>

      {/* 主要内容区域 */}
      <div className='main-content'>
        {/* 使用步骤 */}
        <div className='steps-section'>
          <div className='step-item'>
            <div className='step-number'>1</div>
            <div className='step-content'>
              <h3>📝 说出想法</h3>
              <p>在左下角对话框输入您的需求</p>
            </div>
          </div>
          
          <div className='step-item'>
            <div className='step-number'>2</div>
            <div className='step-content'>
              <h3>🤖 AI 制作</h3>
              <p>AI 自动制作网页功能</p>
            </div>
          </div>
          
          <div className='step-item'>
            <div className='step-number'>3</div>
            <div className='step-content'>
              <h3>✨ 查看效果</h3>
              <p>立即看到制作结果</p>
            </div>
          </div>
        </div>

        {/* 示例提示 */}
        <div className='examples-section'>
          <h3>💬 试试这样说：</h3>
          <div className='example-prompts'>
            <span className='prompt-example'>"制作登录页面"</span>
            <span className='prompt-example'>"添加商品列表"</span>
            <span className='prompt-example'>"制作购物车"</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
