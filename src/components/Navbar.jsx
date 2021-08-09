import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  // Checkbox hack on expanding menu for CSS animations.
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link href="/">
          <img
            className="navbar__logo"
            src="/images/isonenLogo.svg"
            alt="Isonen Logo"
          />
        </Link>
      </div>
      <div className="navbar__link-container">
        <Link href="/">
          <a className="navbar__link">Logg inn</a>
        </Link>
        <div className="navbar__menu">
          <input
            type="checkbox"
            className="navbar__menu__checkbox"
            id="nav-toggle"
          />
          <label htmlFor="nav-toggle" className="navbar__menu__button">
            <span className="navbar__menu__icon"></span>
          </label>
          <div className="navbar__menu__background">
            <ul className="navbar__menu__list">
              <Link href="/">
                <a className="navbar__menu__link">Min side</a>
              </Link>
              <div className="navbar__menu__link-container">
                <Link href="/">
                  <a className="navbar__menu__link">Forbedringer og roadmap</a>
                </Link>
                <Link href="/feedback">
                  <a className="navbar__menu__link">Gi tilbakemeldinger</a>
                </Link>
              </div>
              <Link href="/">
                <a className="navbar__menu__link">Logg inn</a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
