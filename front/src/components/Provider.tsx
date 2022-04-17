import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { apolloClient } from '#apis/graphql';

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: ProviderProps): React.ReactElement {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
      <ToastContainer />
    </ApolloProvider>
  );
}

export default Provider;
