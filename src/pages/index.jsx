import React from 'react';
import Head from 'next/head';

import Searchbar from '../components/Searchbar';
import Testemonial from '../components/Testemonial';
import VideoEmbed from '../components/VideoEmbed';

import { gql, useQuery, NetworkStatus } from '@apollo/client';
import EventContainer, {
  CHARACTERS_BY_IDS_QUERY,
} from '../components/EventContainer';

import { initializeApollo, addApolloState } from '../lib/apolloClient';

export const CHARACTERS_QUERY = gql`
  query allCharacters {
    characters {
      results {
        name
        status
        location {
          name
        }
        image
        created
      }
    }
  }
`;

const IndexPage = () => (
  <div>
    <Head>
      <title>iSonen Copy | Forsiden</title>
      <meta
        name="description"
        content="Forsiden for Norges Idrettsforbunds nye arrengement verktøy for idretten."
      />
    </Head>
    <div className="header">
      <img
        className="header__image"
        src="/images/header-canoo.jpg"
        alt="Woman relaxing in a canoo."
      />
      <Searchbar />
    </div>
    <div className="split-cotainer">
      <div className="split split--read-more">
        <div className="split__text-container">
          <h1 className="heading-primary">Arranger med iSonen</h1>
          <h2 className="heading-secondary" style={{ color: '#003a78' }}>
            Arrangementsverktøy for idretten
          </h2>
        </div>
        <button className="btn btn--blue">Les mer</button>
      </div>
      <div className="split split--login">
        <div className="split__text-container">
          <h1 className="heading-primary" style={{ color: '#fff' }}>
            Klar til å arrangere
          </h1>
          <h2 className="heading-secondary" style={{ color: '#fff' }}>
            Logg inn med Idrettens ID, og opprett arrangement for din klubb
          </h2>
        </div>
        <button className="btn btn--white">Log inn</button>
      </div>
    </div>

    <div className="events">
      <h2 className="heading-secondary">
        Helt random Rick&Morty GraphQL-queries...
      </h2>
      <EventContainer />
      <button className="btn btn--blue events__button">
        Se alle arrangement
      </button>
    </div>

    <div className="testemonials">
      <h2 className="heading-secondary">Se hva andre sier om iSonen</h2>
      <div className="testemonials__container">
        <Testemonial
          text="Det er enkelt å opprette arrangementer der og man får oversikt over innmelding og inntektsbeløp. Vi har ukentlig skøyteskole og derfor var det viktig å gjøre innmeldingen enklere. iSonen har vist seg å være veldig effektivt"
          source="Ola Nordmann, Daglig leder i Fjellhamar Fotballklubb"
        />
        <Testemonial
          text="Det er enkelt å opprette arrangementer der og man får oversikt over innmelding og inntektsbeløp. Vi har ukentlig skøyteskole og derfor var det viktig å gjøre innmeldingen enklere. iSonen har vist seg å være veldig effektivt"
          source="Ola Nordmann, Daglig leder i Fjellhamar Fotballklubb"
        />
        <Testemonial
          text="Det er enkelt å opprette arrangementer der og man får oversikt over innmelding og inntektsbeløp. Vi har ukentlig skøyteskole og derfor var det viktig å gjøre innmeldingen enklere. iSonen har vist seg å være veldig effektivt"
          source="Ola Nordmann, Daglig leder i Fjellhamar Fotballklubb"
        />
      </div>
    </div>

    <div className="video-container">
      <div className="video">
        <VideoEmbed
          embedId="bv5i1vz_454"
          title="iSonen - arrangementløsning for idretten"
        />
      </div>
    </div>

    <div className="action">
      <h1 className="heading-primary">Klar for å arrangere med iSonen?</h1>
      <div className="action__button-container">
        <button className="btn btn--blue action__button">Les mer</button>
        <button className="btn btn--white action__button">Logg inn</button>
      </div>
    </div>
  </div>
);

// Static data-fetching
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CHARACTERS_BY_IDS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
