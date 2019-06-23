import { gql } from 'apollo-boost';

export const FETCH_NOTES = gql`
	{
		notes {
			_id
			title
		}
	}
`;

export const FETCH_NOTE = gql`
	query FetchNote($id: String!) {
		note(id: $id) {
			_id
			title
		}
	}
`;
