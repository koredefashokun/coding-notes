import React from 'react';
import { useMutation } from 'urql';
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

const mutation = `
	mutation CreateBlock($noteId: String!, $mode: String!, $content: String) {
		createBlock(noteId: $noteId, mode: $mode, content: $content) {
			_id
			noteId
			mode
			content
		}
	}
`;

const Editor = ({ fullScreen, currentNote }: EditorProps) => {
	const [title, setTitle] = React.useState(currentNote.title);
	const [{ fetching }, executeMutation] = useMutation(mutation);

	const createNewBlock = (mode: Block['mode']) => {
		return executeMutation({
			noteId: currentNote._id,
			mode,
			content: ''
		});
	};

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
						<CodeTextarea
							blockId={block._id}
							mode={block.mode}
							initialContent={block.content}
						/>
					</BlockContainer>
				))}
				<button onClick={() => createNewBlock('code')}>
					Create new code block
				</button>
				<button onClick={() => createNewBlock('text')}>
					Create new text block
				</button>
			</EditorTextArea>
		</EditorContainer>
	);
};

export default Editor;
