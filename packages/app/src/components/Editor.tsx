import React from 'react';
import { useMutation, useQuery } from 'urql';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
	EditorContainer,
	EditorTitleInput,
	EditorTextArea,
	BlockContainer,
	BlockActionButton
} from './elements';
import { fetchNoteById, createBlock, editNote, clearNote } from '../graphql';
import BlockTextarea from './BlockTextarea';
import EmptyEditor from './EmptyEditor';

interface EditorProps extends RouteComponentProps<{ noteId: string }> {
	fullScreen: boolean;
}

const Editor = ({ fullScreen, match }: EditorProps) => {
	const { noteId } = match.params;
	const [, executeBlockMutation] = useMutation(createBlock);
	const [, executeNoteMutation] = useMutation(editNote);
	const [, executeClearNote] = useMutation(clearNote);
	const [{ data, error, fetching }] = useQuery<{ note: Note }>(
		fetchNoteById(noteId)
	);

	const createNewBlock = (mode: Block['mode']) => {
		return executeBlockMutation({ noteId, mode });
	};

	const editNoteByTitle = (title: string) => {
		return executeNoteMutation({ id: noteId, title });
	};

	const clearNoteBlocks = () => executeClearNote({ id: noteId });

	if (!noteId) return <p>Please create a note first</p>;
	if (fetching) return <p>Loading</p>;
	if (error || !data) {
		// TODO: Make an attempt to get another one.
		// Maybe the topmost one in the sidebar?
		// (Should I have kept all the notes in global state?)
		// If all else fails, then:
		return <EmptyEditor />;
	}

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
					<BlockTextarea
						key={index}
						blockId={block._id}
						mode={block.mode}
						initialContent={block.content}
					/>
				))}

				<div style={{ display: 'flex' }}>
					<BlockActionButton onClick={() => createNewBlock('code')}>
						Create new code block
					</BlockActionButton>
					<BlockActionButton onClick={() => createNewBlock('text')}>
						Create new text block
					</BlockActionButton>
					<BlockActionButton onClick={() => clearNoteBlocks()}>
						Clear all blocks
					</BlockActionButton>
				</div>
			</EditorTextArea>
		</EditorContainer>
	);
};

export default withRouter(Editor);
