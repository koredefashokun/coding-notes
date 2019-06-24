import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { SidebarContainer } from './elements';
import SidebarItem from './SidebarItem';
import { useMutation } from 'urql';

interface SidebarProps extends RouteComponentProps {
	collapsed: boolean;
	notes: Note[];
	setNote(note: Note): void;
}

const mutation = `
	mutation CreateNote($title: String!) {
		createNote(title: $title) {
			_id
			title
			blocks {
				_id
				mode
				content
			}
		}
	}
`;

const Sidebar = ({ collapsed, notes, history }: SidebarProps) => {
	const [{}, executeMutation] = useMutation<any, Partial<Note>>(mutation);

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
