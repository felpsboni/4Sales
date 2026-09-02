import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Theme } from '../../context/ThemeContext';
import { Sun, Moon, Monitor, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeToggleProps {
  variant?: 'button' | 'dropdown' | 'pill';
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'button',
  showLabel = false,
  className = '',
}) => {
  const { theme, resolvedTheme, isDark, setTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle keyboard ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors ${className}`}
        role="group"
        aria-label="Controle de tema de cores"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
            theme === 'light'
              ? 'bg-white text-[#0A2540] shadow-xs'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-pressed={theme === 'light'}
          aria-label="Modo Claro"
          title="Ativar Modo Claro"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Claro</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
            theme === 'dark'
              ? 'bg-slate-700 text-white shadow-xs'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-pressed={theme === 'dark'}
          aria-label="Modo Escuro"
          title="Ativar Modo Escuro"
        >
          <Moon className="w-3.5 h-3.5 text-cyan-400" />
          <span>Escuro</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
            theme === 'system'
              ? 'bg-white dark:bg-slate-700 text-[#0066F5] dark:text-cyan-400 shadow-xs'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-pressed={theme === 'system'}
          aria-label="Modo Automático do Sistema"
          title="Seguir preferências do sistema"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Auto</span>
        </button>
      </div>
    );
  }

  if (variant === 'dropdown') {
    const options: { id: Theme; label: string; icon: React.ReactNode; desc: string }[] = [
      { id: 'light', label: 'Modo Claro', icon: <Sun className="w-4 h-4 text-amber-500" />, desc: 'Fundo limpo e alto contraste' },
      { id: 'dark', label: 'Modo Escuro', icon: <Moon className="w-4 h-4 text-cyan-400" />, desc: 'Conforto visual e sofisticação' },
      { id: 'system', label: 'Automático', icon: <Monitor className="w-4 h-4 text-blue-500" />, desc: 'Sincronizar com seu dispositivo' },
    ];

    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Selecionar tema de cores"
        >
          {resolvedTheme === 'dark' ? (
            <Moon className="w-4 h-4 text-cyan-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
          <span>{theme === 'system' ? 'Automático' : isDark ? 'Escuro' : 'Claro'}</span>
          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-56 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-50 focus:outline-none"
              role="menu"
            >
              <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-1">
                Aparência & Acessibilidade
              </div>
              {options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition-colors text-left ${
                    theme === opt.id
                      ? 'bg-blue-50 dark:bg-slate-800 text-[#0066F5] dark:text-cyan-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2.5">
                    {opt.icon}
                    <div>
                      <div className="leading-none">{opt.label}</div>
                      <div className="text-[10px] text-slate-400 font-normal mt-0.5">{opt.desc}</div>
                    </div>
                  </div>
                  {theme === opt.id && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Default button toggle (Sun/Moon one-click switch)
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 sm:p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066F5] ${className}`}
      aria-label={isDark ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
      title={isDark ? 'Mudar para Modo Claro (Clean)' : 'Mudar para Modo Escuro (Noturno)'}
    >
      <motion.div
        key={resolvedTheme}
        initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 hover:text-[#0066F5] transition-colors" />
        )}
        {showLabel && (
          <span className="text-xs font-semibold">
            {isDark ? 'Modo Claro' : 'Modo Escuro'}
          </span>
        )}
      </motion.div>
    </button>
  );
};
