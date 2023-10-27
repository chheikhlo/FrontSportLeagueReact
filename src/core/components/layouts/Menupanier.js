import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function MenuPanier() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="app-name">SportRentalPro</div>
        <div className="nav-buttons">
          <Link to="/panier" className="panier-button">Mon Panier</Link>
        </div>
      </div>
    </header>
  );
}

export default MenuPanier;
