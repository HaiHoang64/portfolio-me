import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Hai Hoang
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;