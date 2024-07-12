import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Pages from './pages/Pages';
import StaticPages from './pages/StaticPages';
import LandingPages from './pages/LandingPages';
import PagesEdit from './pages/PagesEdit';
import StaticPagesEdit from './pages/StaticPagesEdit';
import LandingPagesEdit from './pages/LandingPagesEdit';
import Media from './pages/Media';
import Analytics from './pages/Analytics';
import SitemapSetting from './pages/SitemapSetting';
import AccountSetting from './pages/AccountSetting';
import NotFound from './pages/NotFound';
import './App.css';

const App: React.FC = () => {

  return (
    <Router>
      <nav className="left-menu-bar position-fixed">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/pages">Page List</Link>
          </li>
          <li>
            <Link to="/static/pages">Static Page List</Link>
          </li>
          <li>
            <Link to="/landing/pages">Landing Page List</Link>
          </li>
          <li>
            <Link to="/media">Media List</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/sitemap/setting">sitemap setting</Link>
          </li>
          <li>
            <Link to="/account/setting">AccountSetting</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/static/pages" element={<StaticPages />} />
        <Route path="/landing/pages" element={<LandingPages />} />
        <Route path="/pages/edit/:pageId" element={<PagesEdit />} />
        <Route path="/static/pages/edit/:pageId" element={<StaticPagesEdit />} />
        <Route path="/landing/pages/edit/:pageId" element={<LandingPagesEdit />} />
        <Route path="/media" element={<Media />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/sitemap/setting" element={<SitemapSetting />} />
        <Route path="/account/setting" element={<AccountSetting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;