import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h1>React Vite Template</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <div style={{ marginTop: '20px' }}>
          <h3>计数器示例</h3>
        </div>
        
        <p>
          编辑 <code>src/App.tsx</code> 并保存以测试 HMR
        </p>
      </div>
      
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>功能特性</h3>
        <ul>
          <li>⚡️ 基于 Vite 的快速构建</li>
          <li>⚛️ React 18 支持</li>
          <li>📝 TypeScript 支持</li>
          <li>🎨 热模块替换 (HMR)</li>
          <li>📦 优化的生产构建</li>
        </ul>
      </div>
      
      <p className="read-the-docs">
        点击 Vite 和 React 徽标了解更多信息
      </p>
    </>
  )
}

export default App