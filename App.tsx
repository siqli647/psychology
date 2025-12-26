
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Mistakes from './pages/Mistakes';
import Stats from './pages/Stats';

const App: React.FC = () => {
  const [isAppDeleted, setIsAppDeleted] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      if (localStorage.getItem('app_is_deleted') === 'true') {
        setIsAppDeleted(true);
      }
    };
    
    checkStatus();
    // 监听其他页面的删除操作
    window.addEventListener('storage', checkStatus);
    window.addEventListener('app-reset-triggered', () => {
      setIsAppDeleted(true);
      localStorage.setItem('app_is_deleted', 'true');
    });

    return () => {
      window.removeEventListener('storage', checkStatus);
    };
  }, []);

  if (isAppDeleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-slate-800 font-sans text-center">
          <p className="text-lg">It may have been moved, edited, or deleted.</p>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:difficulty" element={<Quiz />} />
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
