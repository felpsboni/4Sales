import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  href,
  isExternal,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none text-nowrap rounded-lg';

  const variantStyles = {
    primary:
      'bg-[#0A2540] text-white hover:bg-[#081d33] active:bg-[#051424] focus-visible:ring-[#0A2540] shadow-sm hover:shadow-md',
    secondary:
      'bg-[#0066F5] text-white hover:bg-[#0052c7] active:bg-[#0043a3] focus-visible:ring-[#0066F5] shadow-sm hover:shadow-md',
    outline:
      'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 active:bg-slate-100 dark:active:bg-slate-700 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600 shadow-sm',
    ghost:
      'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 focus-visible:ring-slate-300 dark:focus-visible:ring-slate-600',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1da850] focus-visible:ring-[#25D366] shadow-sm hover:shadow-md font-semibold',
    white:
      'bg-white text-[#0A2540] hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-white shadow-sm font-semibold',
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  }[size];

  const combinedClasses = cn(baseStyles, variantStyles, sizeStyles, className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
};
