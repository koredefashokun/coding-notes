import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createNote } from '../graphql';
import { SidebarContainer } from './elements';
import SidebarItem from './SidebarItem';
import { useMutation } from 'urql';

interface SidebarProps extends RouteComponentProps {
	collapsed: boolean;
	notes: Note[];
}

const Sidebar = ({ collapsed, notes, history }: SidebarProps) => {
	const [{}, executeMutation] = useMutation<any, Partial<Note>>(createNote);

	const addNote = async () => {
		const {
			data: { createNote }
		} = await executeMutation({ title: 'Untitled' });
		history.push(`/${createNote._id}`);
	};

	return (
		<SidebarContainer>
			{notes.map((note, index) => (
				<SidebarItem key={index} title={note.title} to={`/${note._id}`} />
			))}
			<div onClick={addNote}>Add Note</div>
		</SidebarContainer>
	);
};

export default withRouter(Sidebar);
