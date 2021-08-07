import React from 'react';

export default function EventCard(props) {
  const { image, host, title, location, date } = props;
  return (
    <div className="event-card">
      <img className="event-card__image" src={image} alt="Event" />
      <div className="event-card__tag">
        <span className="event-card__tag--date">X</span>
        <span className="event-card__tag--month">Y</span>
      </div>
      <div className="event-card__text">
        <div className="event-card__text__top">
          <span className="event-card__text--small">{host}</span>
          <span className="event-card__text--large">{title}</span>
        </div>
        <div className="event-card__text__bottom">
          <span className="event-card__text--small">{location}</span>
          <span className="event-card__text--small">{date}</span>
        </div>
      </div>
    </div>
  );
}
