import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar({ navExpanded, expandNav }) {
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
            checked={navExpanded}
            onChange={expandNav}
          />
          <label htmlFor="nav-toggle" className="navbar__menu__button">
            <span className="navbar__menu__icon"></span>
          </label>
          <div
            className="navbar__menu__background"
            style={navExpanded ? { transform: 'translateY(0)' } : null}
          >
            <ul className="navbar__menu__list">
              <Link href="/">
                <a className="navbar__menu__link" onClick={expandNav}>
                  Min side
                </a>
              </Link>
              <div className="navbar__menu__link-container">
                <Link href="/">
                  <a className="navbar__menu__link" onClick={expandNav}>
                    Forbedringer og roadmap
                  </a>
                </Link>
                <Link href="/feedback">
                  <a className="navbar__menu__link" onClick={expandNav}>
                    Gi tilbakemeldinger
                  </a>
                </Link>
              </div>
              <Link href="/">
                <a className="navbar__menu__link" onClick={expandNav}>
                  Logg inn
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
