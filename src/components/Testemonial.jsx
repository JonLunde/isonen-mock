import React from 'react';

export default function Testemonial(props) {
  const { text, source } = props;
  return (
    <div className="testemonial">
      <span className="testemonial__text">{text}</span>
      <span className="testemonial__source">-{source}</span>
    </div>
  );
}
