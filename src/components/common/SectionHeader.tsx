import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark';
  badgeColor?: 'blue' | 'teal' | 'navy';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  theme = 'light',
  badgeColor = 'blue',
}) => {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const badgeColorClasses = {
    blue: isDark
      ? 'bg-blue-900/50 text-blue-300 border-blue-700/50'
      : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-blue-800',
    teal: isDark
      ? 'bg-teal-900/50 text-teal-300 border-teal-700/50'
      : 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800',
    navy: isDark
      ? 'bg-slate-800 text-slate-200 border-slate-700'
      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700',
  }[badgeColor];

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClasses, className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border',
            badgeColorClasses
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-[#0A2540] dark:text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
