import React from 'react';
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import EventCard from './EventCard';

export const CHARACTERS_BY_IDS_QUERY = gql`
  {
    charactersByIds(ids: ["1", "2", "3", "4", "55", "6"]) {
      id
      location {
        name
      }
      image
      created
      status
      name
    }
  }
`;

export default function EventContainer() {
  const { data } = useQuery(CHARACTERS_BY_IDS_QUERY);
  console.log('DATA: ', data);
  return (
    <div className="events__container">
      {data &&
        data.charactersByIds.map((character) => (
          <EventCard key={character.id} character={character} />
        ))}
    </div>
  );
}
