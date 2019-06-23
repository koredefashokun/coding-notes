import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';

const client = new ApolloClient({ uri: 'http://localhost:4000' });

const Home = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

export default Home;
