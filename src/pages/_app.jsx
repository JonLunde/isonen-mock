import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../sass/main.scss';
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <Navbar />
        <Component {...pageProps} />
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
