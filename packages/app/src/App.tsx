import * as React from 'react';
import { Provider, createClient } from 'urql';
import App from './components/App';

const client = createClient({ url: 'http://localhost:4000' });

const Home = () => {
	return (
		<Provider value={client}>
			<App />
		</Provider>
	);
};

export default Home;
