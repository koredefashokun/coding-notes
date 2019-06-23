import { gql } from 'apollo-server';

const schema = gql`
	type Query {
		notes: [Note!]!
		note(id: String!): Note!
	}

	type Mutation {
		createNote(title: String!): Note!
	}

	type Note {
		_id: String!
		title: String!
	}
`;

export default schema;
