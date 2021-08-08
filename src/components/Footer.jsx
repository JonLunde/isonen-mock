import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__flex-container">
        <img
          className="footer__logo"
          src="/images/buypassLogo.svg"
          alt="Buypass Logo"
        />
        <div className="footer__link-container">
          <Link to="/feedback" className="footer__link">
            Gi tilbakemelding
          </Link>
          <Link to="/" className="footer__link">
            Kontakt
          </Link>
          <Link to="/" className="footer__link">
            Bli arrangør
          </Link>
          <Link to="/" className="footer__link">
            Personvern og informasjonskapsler
          </Link>
          <Link to="/" className="footer__link">
            Integrasjon
          </Link>
          <Link to="/" className="footer__link">
            Nettstedkart
          </Link>
        </div>
        <img
          className="footer__logo"
          src="/images/nifLogo.svg"
          alt="Buypass Logo"
        />
      </div>
      <span className="footer__legal">
        This is a mock of the original iSonen webpage, done for learning
        purposes.
      </span>
    </div>
  );
}
