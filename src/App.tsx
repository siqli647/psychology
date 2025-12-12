import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Mistakes from './pages/Mistakes';
import Stats from './pages/Stats';

const App: React.FC = () => {
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
