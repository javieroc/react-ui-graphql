import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Routes from './pages';
import client from './Apollo';
import './App.css';

// App
const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default App;
