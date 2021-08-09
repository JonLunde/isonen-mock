import React from 'react';

export default function EventCard(props) {
  const { character } = props;
  return (
    <div className="event-card">
      <img className="event-card__image" src={character.image} alt="Event" />
      <div
        className="event-card__tag"
        style={
          character.status === 'Alive'
            ? { backgroundColor: '#008926' }
            : { backgroundColor: '#9e0215' }
        }
      >
        {character.status}
      </div>
      <div className="event-card__text">
        <div className="event-card__text__top">
          <span className="event-card__text--large">{character.name}</span>
        </div>
        <div className="event-card__text__bottom">
          <span className="event-card__text--small">
            {character.location.name}
          </span>
        </div>
      </div>
    </div>
  );
}
