import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Checkbox hack on expanding menu for CSS animations.
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">
          <img
            className="navbar__logo"
            src="/images/isonenLogo.svg"
            alt="Isonen Logo"
          />
        </Link>
      </div>
      <div className="navbar__link-container">
        <Link to="/" className="navbar__link">
          Logg inn
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
              <Link to="/" className="navbar__menu__link">
                Min side
              </Link>
              <div className="navbar__menu__link-container">
                <Link to="/" className="navbar__menu__link">
                  Forbedringer og roadmap
                </Link>
                <Link to="/feedback" className="navbar__menu__link">
                  Gi tilbakemelding
                </Link>
              </div>
              <Link to="/" className="navbar__menu__link">
                Logg inn
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
