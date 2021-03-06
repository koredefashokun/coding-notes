const blockReturn = `
	{
		_id
		noteId
		mode
		content
	}
`;

const noteReturn = `
	{
		_id
		title
		blocks ${blockReturn}
	}
`;

export const fetchAllNotes = { query: `query { notes ${noteReturn} }` };

export const fetchNoteById = (noteId: string) => ({
	query: `query GetNote($id: String!) { note (id: $id) ${noteReturn} }`,
	variables: { id: noteId }
});

export const createNote = `
	mutation CreateNote($title: String!) {
		createNote(title: $title) ${noteReturn}
	}
`;

export const editNote = `
	mutation EditNote($id: String!, $title: String!) {
		editNote(id: $id, title: $title) ${noteReturn}
	}
`;

export const clearNote = `
	mutation ClearNote($id: String!) {
		clearNote(id: $id) ${noteReturn}
	}
`;

export const deleteNote = `
	mutation DeleteNote ($id: String!) {
		deleteNote(id: $id) { _id }
	}
`;

export const createBlock = `
	mutation CreateBlock($noteId: String!, $mode: String!) {
		createBlock(noteId: $noteId, mode: $mode) ${blockReturn}
	}
`;

export const editBlock = `
	mutation EditBlock($id: String!, $content: String!) {
		editBlock(id: $id, content: $content) ${blockReturn}
	}
`;

export const deleteBlock = `
	mutation DeleteBlock($id: String!) {
		deleteBlock(id: $id) { _id }
	}
`;
