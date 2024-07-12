import React from 'react';
import { Link } from 'react-router-dom';

const StaticPages: React.FC = () => {
  return (
    <div className="main-column">
      <h1 className="pl-1rem">Static Page List</h1>
      <p className="pl-1rem">This is Static Page Lists!</p>
      <nav className="pl-1rem">
        <ul>
          <li>
            <Link to="/static/pages/edit/1">固定ページ1</Link>
          </li>
          <li>
            <Link to="/static/pages/edit/2">固定ページ2</Link>
          </li>
          <li>
            <Link to="/static/pages/edit/3">固定ページ3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default StaticPages;
