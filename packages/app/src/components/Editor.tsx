import React from 'react';
import { useMutation, useQuery } from 'urql';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
	EditorContainer,
	EditorTitleInput,
	EditorTextArea,
	BlockContainer
} from './elements';
import { fetchNoteById, createBlock, editNote } from '../graphql';
import CodeTextarea from './CodeTextarea';

interface EditorProps extends RouteComponentProps<{ noteId: string }> {
	fullScreen: boolean;
}

const Editor = ({ fullScreen, match }: EditorProps) => {
	const { noteId } = match.params;
	const [{}, executeBlockMutation] = useMutation(createBlock);
	const [{}, executeNoteMutation] = useMutation(editNote);
	const [{ data, error, fetching }] = useQuery<{ note: Note }>(
		fetchNoteById(noteId)
	);

	const createNewBlock = (mode: Block['mode']) => {
		return executeBlockMutation({ noteId, mode, content: '' });
	};

	const editNoteByTitle = async (title: string) => {
		return executeNoteMutation({ id: noteId, title });
	};

	if (!noteId) return <p>Please create a note first</p>;
	if (fetching) return <p>Loading</p>;
	if (error || !data) return <p>An error has ocurred.</p>;

	const { note } = data;

	return (
		<EditorContainer>
			<EditorTitleInput
				placeholder='Note Title'
				value={note.title}
				onChange={e => editNoteByTitle(e.target.value)}
			/>
			<EditorTextArea>
				{note.blocks.map((block, index) => (
					<BlockContainer key={index} mode={block.mode} writingMode>
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

export default withRouter(Editor);
