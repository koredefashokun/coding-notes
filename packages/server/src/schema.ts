import { gql } from 'apollo-server';

const schema = gql`
	type Block {
		_id: String!
		noteId: String!
		mode: String!
		content: String
	}

	type Note {
		_id: String!
		title: String!
		blocks: [Block!]
	}

	type Query {
		notes: [Note!]!
		note(id: String!): Note!
		blocks: [Block!]!
	}

	type Mutation {
		createNote(title: String!): Note!
		editNote(id: String!, title: String!): Note!
		deleteNote(id: String!): Note!
		createBlock(noteId: String!, mode: String!, content: String): Block!
		editBlock(id: String!, mode: String, content: String!): Block!
		deleteBlock(id: String!): String!
	}
`;

export default schema;
