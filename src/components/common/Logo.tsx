import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface LogoProps {
  variant?: 'dark' | 'light' | 'mono' | 'auto';
  showSubtext?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showSubtext = true,
  className = '',
  size = 'md',
}) => {
  let isDarkMode = false;
  try {
    const themeContext = useTheme();
    isDarkMode = themeContext.isDark;
  } catch {
    // Fallback if rendered outside ThemeProvider
    isDarkMode = false;
  }

  const isLight = variant === 'light' || (variant === 'auto' && isDarkMode);

  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16',
  }[size];

  const subtextClasses = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
    xl: 'text-xs',
  }[size];

  const textColor = isLight ? '#FFFFFF' : '#1E293B';
  const idPrefix = isLight ? 'light' : 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 group select-none ${className}`}>
      {/* 4Sales Official Vector Brand Mark */}
      <svg
        className={`${sizeClasses} w-auto transition-transform duration-300 group-hover:scale-[1.02]`}
        viewBox="0 0 520 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logomarca Oficial 4Sales"
      >
        <defs>
          {/* Swirl Gradients */}
          <linearGradient id={`${idPrefix}-tealGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2B4" />
            <stop offset="100%" stopColor="#0099B8" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-blueGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-purpleGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-orangeGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-sGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2B4" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* EMBLEM: Swirl sphere icon */}
        <g transform="translate(10, 5)">
          {/* Base Navy Arc */}
          <path
            d="M24 85 C 20 108, 35 128, 56 136 C 44 128, 32 110, 30 90 C 29 76, 33 62, 38 48 C 34 60, 26 72, 24 85 Z"
            fill={isLight ? '#38BDF8' : '#0F2042'}
          />

          {/* Purple Top Ribbon */}
          <path
            d="M48 28 C 58 18, 72 13, 85 12 C 76 15, 63 22, 55 31 C 45 42, 40 54, 38 66 C 37 52, 41 38, 48 28 Z"
            fill={`url(#${idPrefix}-purpleGrad)`}
          />
          <circle cx="95" cy="16" r="7" fill={`url(#${idPrefix}-purpleGrad)`} />

          {/* Blue Upper Arc */}
          <path
            d="M34 100 C 28 78, 38 48, 65 28 C 80 16, 98 12, 115 13 C 100 18, 85 26, 74 36 C 52 56, 44 82, 48 108 C 43 109, 38 108, 34 100 Z"
            fill={`url(#${idPrefix}-blueGrad)`}
          />

          {/* Teal Center Ribbon */}
          <path
            d="M48 116 C 45 96, 56 72, 78 54 C 92 42, 108 36, 124 35 C 110 41, 97 50, 87 61 C 70 79, 64 100, 68 118 C 61 119, 54 118, 48 116 Z"
            fill={`url(#${idPrefix}-tealGrad)`}
          />
          <circle cx="132" cy="42" r="8" fill={`url(#${idPrefix}-tealGrad)`} />

          {/* Orange Lower Arc */}
          <path
            d="M60 126 C 63 114, 72 100, 86 88 C 96 80, 106 75, 116 74 C 108 78, 100 84, 94 91 C 83 103, 79 116, 80 128 C 73 130, 66 129, 60 126 Z"
            fill={`url(#${idPrefix}-orangeGrad)`}
          />
          <circle cx="124" cy="80" r="7" fill={`url(#${idPrefix}-orangeGrad)`} />
        </g>

        {/* TYPOGRAPHY: 4Sales */}
        <g transform="translate(165, 0)">
          {/* '4' in Heavy Slate */}
          <text
            x="0"
            y="108"
            fill={textColor}
            fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
            fontSize="108"
            fontWeight="900"
            letterSpacing="-0.05em"
          >
            4
          </text>

          {/* 'S' in Vibrant Teal-Blue Gradient */}
          <text
            x="64"
            y="108"
            fill={`url(#${idPrefix}-sGrad)`}
            fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
            fontSize="108"
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            S
          </text>

          {/* 'ales' in Pure Slate / White */}
          <text
            x="134"
            y="108"
            fill={textColor}
            fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
            fontSize="108"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            ales
          </text>
        </g>
      </svg>

      {/* Institutional Byline (Fabritech) */}
      {showSubtext && (
        <div className={`hidden sm:flex flex-col border-l ${isLight ? 'border-slate-700' : 'border-slate-300 dark:border-slate-700'} pl-2.5 leading-tight shrink-0`}>
          <span className={`font-normal ${isLight ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'} ${subtextClasses}`}>
            Uma plataforma
          </span>
          <span className={`font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-[#0A2540] dark:text-white'} ${subtextClasses}`}>
            Fabritech
          </span>
        </div>
      )}
    </div>
  );
};
