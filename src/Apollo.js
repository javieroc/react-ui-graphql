import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3001/api/graphql',
});

export default client;
