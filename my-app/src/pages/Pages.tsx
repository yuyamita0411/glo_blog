import React from 'react';
import { Link } from 'react-router-dom';

const Pages: React.FC = () => {
  return (
    <div className="main-column">
      <h1 className="pl-1rem">Page List</h1>
      <p className="pl-1rem">This is Page Lists!</p>
      <nav className="pl-1rem">
        <ul>
          <li>
            <Link to="/pages/edit/1">ページ1</Link>
          </li>
          <li>
            <Link to="/pages/edit/2">ページ2</Link>
          </li>
          <li>
            <Link to="/pages/edit/3">ページ3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pages;