import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/navbar';
import '../styles/nprogress.css'

const GlobalStyles=createGlobalStyle`
body{
  background-color: "blue";
}`

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (<>
    <GlobalStyles/>
    <ApolloProvider client={apolloClient}>
      <Navbar/>
      <Component {...pageProps} />
    </ApolloProvider>
    
</>
  );
};

export default MyApp;