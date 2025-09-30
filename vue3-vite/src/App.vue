<script setup lang="ts">
import { ref } from 'vue'
import { userApi, exampleApi, useApi } from './lib/services'

interface User {
  id: number
  username: string
  email: string
}

interface Post {
  id: number
  title: string
  content: string
}

defineProps<{ msg: string }>()

const count = ref(0)
const loading = ref(false)
const error = ref<string | null>(null)
const userData = ref<User | null>(null)

// 使用自定义Hook获取数据
const { data: posts, loading: postsLoading, error: postsError } = useApi(
  () => exampleApi.getList({ page: 1, pageSize: 10 }),
  true
)

// 登录示例
const handleLogin = async () => {
  loading.value = true
  error.value = null
  
  try {
    const result = await userApi.login({
      username: 'demo',
      password: '123456'
    })
    console.log('登录成功:', result)
    alert('登录成功！')
  } catch (err: any) {
    error.value = err.message || '登录失败'
    console.error('登录失败:', err)
  } finally {
    loading.value = false
  }
}

// 获取用户信息
const handleGetUserInfo = async () => {
  loading.value = true
  error.value = null
  
  try {
    const user = await userApi.getUserInfo()
    userData.value = user
    console.log('用户信息:', user)
  } catch (err: any) {
    error.value = err.message || '获取用户信息失败'
    console.error('获取用户信息失败:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1>${{title}}</h1>
  
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    
    <div style="margin-top: 20px;">
      <h3>API 调用示例</h3>
      
      <button 
        @click="handleLogin" 
        :disabled="loading"
        style="margin-right: 10px;"
      >
        {{ loading ? '登录中...' : '模拟登录' }}
      </button>
      
      <button 
        @click="handleGetUserInfo" 
        :disabled="loading"
      >
        {{ loading ? '获取中...' : '获取用户信息' }}
      </button>
      
      <div v-if="error" style="color: red; margin-top: 10px;">
        错误: {{ error }}
      </div>
      
      <div v-if="userData" style="margin-top: 10px; padding: 10px; border: 1px solid #ccc;">
        <h4>用户信息:</h4>
        <p>ID: {{ userData.id }}</p>
        <p>用户名: {{ userData.username }}</p>
        <p>邮箱: {{ userData.email }}</p>
      </div>
      
      <div v-if="postsLoading" style="margin-top: 10px;">
        加载帖子列表中...
      </div>
      
      <div v-if="postsError" style="color: red; margin-top: 10px;">
        加载失败: {{ postsError.message }}
      </div>
      
      <div v-if="posts" style="margin-top: 20px;">
        <h4>帖子列表 (共 {{ posts.total }} 条):</h4>
        <ul>
          <li v-for="post in posts.list" :key="post.id">
            <strong>{{ post.title }}</strong>
            <p>{{ post.content }}</p>
          </li>
        </ul>
      </div>
    </div>
    
    <p style="margin-top: 20px;">
      查看 <code>src/lib/api.ts</code> 和 <code>src/lib/services.ts</code> 了解完整的HTTP客户端配置
    </p>
  </div>
  
  <div class="card" style="margin-top: 20px;">
    <h3>功能特性</h3>
    <ul>
      <li>✅ 基于 Axios 的 HTTP 客户端</li>
      <li>✅ 统一的错误处理</li>
      <li>✅ 请求/响应拦截器</li>
      <li>✅ TypeScript 类型支持</li>
      <li>✅ Vue 3 Composition API 封装</li>
      <li>✅ 自动 token 管理</li>
      <li>✅ 接口响应数据标准化</li>
    </ul>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>