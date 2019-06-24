import React from 'react';
import {
	EditorContainer,
	EditorTitleInput,
	EditorTextArea,
	BlockContainer
} from './elements';
import CodeTextarea from './CodeTextarea';

interface EditorProps {
	fullScreen: boolean;
	editorState: object;
}

const Editor = ({ fullScreen, editorState }: EditorProps) => {
	const [title, setTitle] = React.useState('');
	return (
		<EditorContainer>
			<EditorTitleInput
				placeholder='Note Title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<EditorTextArea>
				<BlockContainer mode='text' writingMode={true}>
					<textarea />
				</BlockContainer>
				<BlockContainer mode='code' writingMode={true}>
					<CodeTextarea blockId='' />
				</BlockContainer>
			</EditorTextArea>
		</EditorContainer>
	);
};

export default Editor;
