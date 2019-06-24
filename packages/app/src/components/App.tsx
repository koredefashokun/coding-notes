import React from 'react';
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
	// const [currentNote, setCurrentNote] = React.useState<Note>();
	if (fetching) return <p>Loading</p>;
	if (error || !data) return <p>Error</p>;

	return (
		<AppContainer>
			<Sidebar notes={data.notes} collapsed={fullScreen} />
			<Editor {...{ fullScreen, currentNote: data.notes[0] }} />
		</AppContainer>
	);
};

export default App;
