import React from 'react';
import Link from 'next/link';

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
          <Link href="/feedback">
            <a className="footer__link">Gi tilbakemelding</a>
          </Link>
          <Link href="/">
            <a className="footer__link">Kontakt</a>
          </Link>
          <Link href="/">
            <a className="footer__link">Bli arrangør</a>
          </Link>
          <Link href="/">
            <a className="footer__link">Personvern og informasjonskapsler</a>
          </Link>
          <Link href="/">
            <a className="footer__link">Integrasjon</a>
          </Link>
          <Link href="/">
            <a className="footer__link">Nettstedkart</a>
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
