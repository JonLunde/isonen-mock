import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../sass/main.scss';
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  const [navExpanded, setNavExpanded] = useState(false);
  const apolloClient = useApollo(pageProps);

  function expandNav() {
    setNavExpanded((prevState) => !prevState);
  }

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <Navbar navExpanded={navExpanded} expandNav={expandNav} />
        <div
          style={navExpanded ? { opacity: '0.3' } : null}
          onClick={() => {
            setNavExpanded(false);
          }}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
