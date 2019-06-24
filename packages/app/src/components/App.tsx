import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppContainer } from './elements';
import { useQuery } from 'urql';
import Sidebar from './Sidebar';
import Editor from './Editor';

const query = `
	{
		notes {
			_id
			title
			blocks {
				_id
				mode
				content
			}
		}
	}
`;

const App = () => {
	const [fullScreen, setFullScreen] = React.useState(false);
	const [{ data, error, fetching }] = useQuery<{ notes: Note[] }>({ query });
	const [currentNote, setCurrentNote] = React.useState<Note>();

	const setNote = (note: Note) => setCurrentNote(note);

	if (fetching) return <p>Loading</p>;
	if (error || !data) return <p>Error</p>;

	return (
		<BrowserRouter>
			<AppContainer>
				<Sidebar notes={data.notes} setNote={setNote} collapsed={fullScreen} />
				<Route path='/:noteId' component={Editor} />
			</AppContainer>
		</BrowserRouter>
	);
};

export default App;
