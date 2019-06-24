import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchAllNotes } from '../graphql';
import { AppContainer } from './elements';
import { useQuery } from 'urql';
import Sidebar from './Sidebar';
import Editor from './Editor';

const App = () => {
	const [fullScreen, setFullScreen] = React.useState(false);
	const [{ data, error, fetching }] = useQuery<{ notes: Note[] }>(
		fetchAllNotes
	);

	if (fetching) return <p>Loading</p>;
	if (error || !data) return <p>Error</p>;

	return (
		<BrowserRouter>
			<AppContainer>
				<Sidebar notes={data.notes} collapsed={fullScreen} />
				<Route path='/:noteId' component={Editor} />
			</AppContainer>
		</BrowserRouter>
	);
};

export default App;
