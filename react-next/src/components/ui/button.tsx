import * as React from 'react';
import { cn } from '@/lib/utils';

// 按钮变体类型
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

// 按钮大小类型
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// 按钮属性接口
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// 按钮变体样式映射
const buttonVariants = {
  default: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
  ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  link: 'text-primary-600 underline-offset-4 hover:underline focus:ring-primary-500',
};

// 按钮大小样式映射
const buttonSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

/**
 * 按钮组件
 * 提供多种样式和大小选项的按钮组件
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';

    return (
      <Comp
        className={cn(
          // 基础样式
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          // 变体样式
          buttonVariants[variant],
          // 大小样式
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants, buttonSizes };
