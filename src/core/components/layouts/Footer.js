import React from 'react';
import './Footer.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          Nous contacter:
          <div className="email">Mail: sportrentalpro@gmail.com</div>
          <div className="phone">Numéro: +3378956321</div>
        </div>
        <div className="copyright">
          Tous droits réservés &copy; {new Date().getFullYear()} SportRentalPro
        </div>
      </div>
    </footer>
  );
}

export default Footer;
