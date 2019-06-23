import React from 'react';
import { EditorContainer, EditorTitleInput, EditorTextArea } from './elements';

interface EditorProps {
	fullScreen: boolean;
}

const Editor = ({ fullScreen }: EditorProps) => {
	const [title, setTitle] = React.useState('');
	{
		/* Last saved widget, formatting and more */
	}
	return (
		<EditorContainer>
			<EditorTitleInput
				placeholder='Note Title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<EditorTextArea />
		</EditorContainer>
	);
};

export default Editor;
