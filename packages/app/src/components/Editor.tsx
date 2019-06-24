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
	currentNote: Note;
}

const Editor = ({ fullScreen, currentNote }: EditorProps) => {
	const [title, setTitle] = React.useState(currentNote.title);
	return (
		<EditorContainer>
			<EditorTitleInput
				placeholder='Note Title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<EditorTextArea>
				{currentNote.blocks.map((block, index) => (
					<BlockContainer mode={block.mode} writingMode>
						{block.mode === 'code' ? (
							<CodeTextarea blockId={block._id} />
						) : (
							<textarea />
						)}
					</BlockContainer>
				))}
			</EditorTextArea>
		</EditorContainer>
	);
};

export default Editor;
