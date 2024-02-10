import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="header">
        <FontAwesomeIcon icon={faGlobeAmericas} className="globe-icon" />
        <h1>My Travel Journal</h1>
    </header>
  );
}

export default Header;
