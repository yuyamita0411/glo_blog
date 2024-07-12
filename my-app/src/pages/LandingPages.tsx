import React from 'react';
import { Link } from 'react-router-dom';

const LandingPages: React.FC = () => {
  return (
    <div className="main-column">
      <h1 className="pl-1rem">Landing Page List</h1>
      <p className="pl-1rem">This is Landing Page Lists!</p>
      <nav className="pl-1rem">
        <ul>
          <li>
            <Link to="/landing/pages/edit/1">LP1</Link>
          </li>
          <li>
            <Link to="/landing/pages/edit/2">LP2</Link>
          </li>
          <li>
            <Link to="/landing/pages/edit/3">LP3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPages;