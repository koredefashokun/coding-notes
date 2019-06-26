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
import { fetchNoteById, createBlock, editNote } from '../graphql';
import CodeTextarea from './CodeTextarea';

interface EditorProps extends RouteComponentProps<{ noteId: string }> {
	fullScreen: boolean;
}

const Editor = ({ fullScreen, match }: EditorProps) => {
	const { noteId } = match.params;
	const [, executeBlockMutation] = useMutation(createBlock);
	const [, executeNoteMutation] = useMutation(editNote);
	const [{ data, error, fetching }] = useQuery<{ note: Note }>(
		fetchNoteById(noteId)
	);

	const createNewBlock = async (mode: Block['mode']) => {
		return executeBlockMutation({ noteId, mode, content: '' });
		// This works but makes the app feel very brittle.
		// executeQuery({ requestPolicy: 'cache-and-network' });
	};

	const editNoteByTitle = async (title: string) => {
		return executeNoteMutation({ id: noteId, title });
	};

	if (!noteId) return <p>Please create a note first</p>;
	if (fetching) return <p>Loading</p>;
	if (error || !data) {
		// TODO: Make an attempt to get another one.
		// Maybe the topmost one in the sidebar?
		// (Should I have kept all the notes in global state?)
		// If all else fails, then:
		return (
			<div style={{ padding: 20, fontFamily: 'sans-serif' }}>
				<p>Create a new note, or select one from the sidebar</p>
			</div>
		);
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
					<BlockContainer key={index} mode={block.mode}>
						<CodeTextarea
							blockId={block._id}
							mode={block.mode}
							initialContent={block.content}
						/>
					</BlockContainer>
				))}

				<div style={{ display: 'flex' }}>
					<BlockActionButton onClick={() => createNewBlock('code')}>
						Create new code block
					</BlockActionButton>
					<BlockActionButton onClick={() => createNewBlock('text')}>
						Create new text block
					</BlockActionButton>
				</div>
			</EditorTextArea>
		</EditorContainer>
	);
};

export default withRouter(Editor);
