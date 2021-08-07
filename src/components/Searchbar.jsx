import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Searchbar() {
  return (
    <div className="searchbar">
      <span className="searchbar__text">Finn ditt neste arrangement</span>
      <div className="searchbar__container">
        <FontAwesomeIcon icon={faSearch} className="searchbar__icon" />
        <input
          type="text"
          className="searchbar__input"
          placeholder="Søk på arrangører, arrangementer..."
        />
        <button className="searchbar__button">Søk</button>
      </div>
    </div>
  );
}
