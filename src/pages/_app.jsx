import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../sass/main.scss';
// import App from 'next/app'

// const scrollLockStyle = {
//   position: 'fixed',
//   overflow: 'hidden',
//   opacity: '0.3',
//   backgroundColor: '#fff',
//   width: '100vw',
//   height: '100vh',
//   zIndex: '10',
// };

function MyApp({ Component, pageProps }) {
  const [navExpanded, setNavExpanded] = useState(false);
  const apolloClient = useApollo(pageProps);
  let scrollLockedEl = null;

  function expandNav() {
    navExpanded
      ? enableBodyScroll(scrollLockedEl)
      : disableBodyScroll(scrollLockedEl);
    setNavExpanded((prevState) => !prevState);
  }

  useEffect(() => {
    scrollLockedEl = document.querySelector('body');
  });

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <Navbar navExpanded={navExpanded} expandNav={expandNav} />

        <div
          style={navExpanded ? { opacity: '0.3' } : null}
          id="body"
          onClick={() => {
            disableBodyScroll(scrollLockedEl);
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
