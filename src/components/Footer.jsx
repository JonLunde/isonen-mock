import React from 'react';

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
          <a href="#" className="footer__link">
            Gi tilbakemelding
          </a>
          <a href="#" className="footer__link">
            Kontakt
          </a>
          <a href="#" className="footer__link">
            Bli arrangør
          </a>
          <a href="#" className="footer__link">
            Personvern og informasjonskapsler
          </a>
          <a href="#" className="footer__link">
            Integrasjon
          </a>
          <a href="#" className="footer__link">
            Nettstedkart
          </a>
        </div>
        <img
          className="footer__logo"
          src="/images/nifLogo.svg"
          alt="Buypass Logo"
        />
      </div>
      <span className="footer__legal">
        Utvikler av Buypass i samarbeid med Norges Idrettsforbund
      </span>
    </div>
  );
}
