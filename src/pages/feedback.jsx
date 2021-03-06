import React from 'react';
import Head from 'next/head';

import Form from '../components/Form';

export default function Feedback() {
  return (
    <div className="feedback-container">
      <Head>
        <title>iSonen Copy | Tilbakemelding</title>
        <meta
          name="description"
          content="Her kan du sende oss tilbakemeldinger som er nyttige for oss i videre utvikling av nettstedet."
        />
      </Head>
      <h1 className="header__title heading-primary">Tilbakemelding</h1>
      <span className="header__subtitle">
        Tusen takk for at du tar deg tid til å gi iSonen din tilbakemelding.
        Nedenfor er et skjema hvor du kan fylle inn informasjon om
        tilbakemeldingen.
      </span>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}
