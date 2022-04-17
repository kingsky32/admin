import { ApolloClient, InMemoryCache } from '@apollo/client';
import { baseURL } from '#apis/index';

export const apolloClient = new ApolloClient({
  uri: `${baseURL}/graphql`,
  cache: new InMemoryCache(),
});
