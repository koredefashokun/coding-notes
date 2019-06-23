import * as React from 'react';
import { Provider, createClient } from 'urql';
import App from './components/App';
import appReducer from './store';

const client = createClient({ url: 'http://localhost:4000' });

const Home = () => {
	const [state, dispatch] = React.useReducer(appReducer, {});
	return (
		<Provider value={client}>
			<App editorState={{}} />
		</Provider>
	);
};

export default Home;
