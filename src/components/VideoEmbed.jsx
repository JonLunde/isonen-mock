import React from 'react';

export default function VideoEmbed(props) {
  const { embedId, title } = props;
  return (
    <div>
      <div className="video-embed">
        <iframe
          title={title}
          height="480"
          width="853"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
