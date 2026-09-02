import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';

const getBasename = (): string => {
  if (typeof window === 'undefined') return '/';
  const pathname = window.location.pathname;
  const isGithubPages = window.location.hostname.endsWith('github.io');
  
  if (isGithubPages || pathname.startsWith('/4Sales') || pathname.startsWith('/4sales')) {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length > 0) {
      return `/${parts[0]}`;
    }
  }
  return '/';
};

export default function App() {
  const basename = React.useMemo(() => getBasename(), []);

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conteudos" element={<BlogPage />} />
          <Route path="/conteudos/:slug" element={<BlogPostPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
