import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: '关于我们',
  description: '了解 {{projectName}} 的更多信息',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            关于我们
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            了解 {{projectName}} 的使命和愿景
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">我们的使命</h2>
            <p className="mt-4 text-gray-600">
              我们致力于创建高质量、现代化的 Web 应用程序，为用户提供卓越的体验。
              通过使用最新的技术栈和最佳实践，我们确保每个项目都能达到最高标准。
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">技术栈</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">前端技术</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">开发工具</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• ESLint</li>
                  <li>• Prettier</li>
                  <li>• PostCSS</li>
                  <li>• 热重载</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">联系我们</h2>
            <p className="mt-4 text-gray-600">
              如果您有任何问题或建议，请随时与我们联系。我们很乐意听到您的反馈。
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button>联系我们</Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
