import React from 'react';
import { AppContainer } from './elements';
import Sidebar from './Sidebar';
import Editor from './Editor';

const App = () => {
	const [fullScreen, setFullScreen] = React.useState(false);
	return (
		<AppContainer>
			<Sidebar collapsed={fullScreen} />
			<Editor {...{ fullScreen }} />
		</AppContainer>
	);
};

export default App;
