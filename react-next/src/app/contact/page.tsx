import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
  title: '联系我们',
  description: '与 {{projectName}} 团队取得联系',
};

export default function ContactPage() {
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
            联系我们
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们很乐意听到您的消息。请填写下面的表单，我们会尽快回复您。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 联系表单 */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">发送消息</h2>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  姓名
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  邮箱
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  主题
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="请输入消息主题"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  消息内容
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1"
                  placeholder="请输入您的消息内容"
                />
              </div>

              <Button type="submit" className="w-full">
                发送消息
              </Button>
            </form>
          </Card>

          {/* 联系信息 */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900">联系信息</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h.75V15a7.5 7.5 0 00-7.5-7.5H2.25z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0-8.284 6.716-15 15-15s15 6.716 15 15v7.5c0 8.284-6.716 15-15 15s-15-6.716-15-15v-7.5z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">+86 138 0000 0000</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">北京市朝阳区</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900">工作时间</h2>
              <div className="mt-6 space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>周一 - 周五</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>周六</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>周日</span>
                  <span>休息</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
