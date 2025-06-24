import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/index';
import Browse from './pages/Browse';
import Upload from './pages/Upload';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Optional: If your Navbar/Footer are not included on every page, you can move them here
// But since you're already importing them inside individual pages (like Home), we won't duplicate them here

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;


