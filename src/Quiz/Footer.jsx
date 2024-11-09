import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <p className="footer">
      <p>&copy; {new Date().getFullYear()} Quiz Application. Tous droits réservés.</p>
    </p>
  );
};

export default Footer;
