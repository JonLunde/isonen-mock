import React from 'react';
// import logo from '';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <a href="#">
          <img
            className="navbar__logo"
            src="/images/isonenLogo.svg"
            alt="Isonen Logo"
          />
        </a>
      </div>
      <div className="navbar__link-container">
        <a href="#" className="navbar__link">
          Logg inn
        </a>
        <a href="#" className="navbar__link">
          Meny
        </a>
      </div>
    </div>
  );
}
