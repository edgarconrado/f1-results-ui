import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const API_KEY = process.env.EXPO_PUBLIC_STEPZEN_API_KEY;
const API_URI = process.env.EXPO_PUBLIC_STEPZEN_API_URI;

const client = new ApolloClient({
  //uri: 'https://betafika.stepzen.net/api/gilded-bunny/__graphql',
  uri: `${API_URI}`,
  headers: {
    Authorization:
      `apikey ${API_KEY}`,
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;