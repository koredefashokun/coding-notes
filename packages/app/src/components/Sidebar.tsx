import React from 'react';
import { Query } from 'react-apollo';
import { SidebarContainer } from './elements';
import { FETCH_NOTES } from '../graphql/queries';

interface Note {
	_id: string;
	title: string;
}

interface SidebarProps {
	collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => (
	<Query<{ notes: Note[] }> query={FETCH_NOTES}>
		{({ loading, error, data }) => {
			if (error) return <p>Error</p>;
			if (loading) return <p>Loading</p>;
			console.log(data);
			return (
				data && (
					<SidebarContainer>
						{data.notes.map(note => (
							<p>{note.title}</p>
						))}
					</SidebarContainer>
				)
			);
		}}
	</Query>
);

export default Sidebar;
