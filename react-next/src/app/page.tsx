import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 导航栏 */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                {{projectName}}
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <Button variant="ghost">关于</Button>
              </Link>
              <Link href="/contact">
                <Button>联系我们</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 英雄区域 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            欢迎使用{' '}
            <span className="text-primary-600">{{projectName}}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {{description}}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8">
              开始使用
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              了解更多
            </Button>
          </div>
        </div>

        {/* 特性卡片 */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              特性介绍
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              基于 Next.js 14 和 Tailwind CSS 构建的现代化应用
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                快速开发
              </h3>
              <p className="mt-2 text-gray-600">
                基于 Next.js 14 App Router，提供最佳开发体验
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                现代化设计
              </h3>
              <p className="mt-2 text-gray-600">
                使用 Tailwind CSS 构建响应式、美观的用户界面
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                TypeScript 支持
              </h3>
              <p className="mt-2 text-gray-600">
                完整的 TypeScript 支持，提供更好的开发体验
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 {{projectName}}. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
