import { useState } from 'react'
import { userApi, exampleApi, useApi } from './lib/services'
import './App.css'

interface User {
  id: number;
  username: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<User | null>(null)

  // 使用自定义Hook获取数据
  const { data: posts, loading: postsLoading, error: postsError } = useApi(
    () => exampleApi.getList({ page: 1, pageSize: 10 })
  )

  // 登录示例
  const handleLogin = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await userApi.login({
        username: 'demo',
        password: '123456'
      })
      console.log('登录成功:', result)
      alert('登录成功！')
    } catch (err: any) {
      setError(err.message || '登录失败')
      console.error('登录失败:', err)
    } finally {
      setLoading(false)
    }
  }

  // 获取用户信息
  const handleGetUserInfo = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const user = await userApi.getUserInfo()
      setUserData(user)
      console.log('用户信息:', user)
    } catch (err: any) {
      setError(err.message || '获取用户信息失败')
      console.error('获取用户信息失败:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1>${{title}}</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <div style={{ marginTop: '20px' }}>
          <h3>API 调用示例</h3>
          
          <button 
            onClick={handleLogin} 
            disabled={loading}
            style={{ marginRight: '10px' }}
          >
            {loading ? '登录中...' : '模拟登录'}
          </button>
          
          <button 
            onClick={handleGetUserInfo} 
            disabled={loading}
          >
            {loading ? '获取中...' : '获取用户信息'}
          </button>
          
          {error && <p style={{ color: 'red' }}>错误: {error}</p>}
          
          {userData && (
            <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
              <h4>用户信息:</h4>
              <p>ID: {userData.id}</p>
              <p>用户名: {userData.username}</p>
              <p>邮箱: {userData.email}</p>
            </div>
          )}
          
          {postsLoading && <p>加载帖子列表中...</p>}
          {postsError && <p style={{ color: 'red' }}>加载失败: {postsError.message}</p>}
          
          {posts && (
            <div style={{ marginTop: '20px' }}>
              <h4>帖子列表 (共 {posts.total} 条):</h4>
              <ul>
                {posts.list.map((post: any) => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <p>
          查看 <code>src/lib/api.ts</code> 和 <code>src/lib/services.ts</code> 了解完整的HTTP客户端配置
        </p>
      </div>
      
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>功能特性</h3>
        <ul>
          <li>✅ 基于 Axios 的 HTTP 客户端</li>
          <li>✅ 统一的错误处理</li>
          <li>✅ 请求/响应拦截器</li>
          <li>✅ TypeScript 类型支持</li>
          <li>✅ React Hooks 封装</li>
          <li>✅ 自动 token 管理</li>
          <li>✅ 接口响应数据标准化</li>
        </ul>
      </div>
      
      <p className="read-the-docs">
        点击 Vite 和 React 徽标了解更多信息
      </p>
    </>
  )
}

export default App