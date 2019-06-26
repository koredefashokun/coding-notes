import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createNote } from '../graphql';
import { SidebarContainer, SidebarActionButton } from './elements';
import SidebarItem from './SidebarItem';
import { useMutation } from 'urql';

interface SidebarProps extends RouteComponentProps<{ noteId: string }> {
	collapsed: boolean;
	notes: Note[];
}

const Sidebar = ({ collapsed, notes, history, match }: SidebarProps) => {
	const [, executeMutation] = useMutation<any, Partial<Note>>(createNote);

	const addNote = async () => {
		const {
			data: { createNote: note }
		} = await executeMutation({ title: 'Untitled' });
		history.push(`/${note._id}`);
	};

	return (
		<SidebarContainer>
			{notes.map((note, index) => (
				<SidebarItem
          key={index}
          id={note._id}
					title={note.title}
					to={`/${note._id}`}
					selected={match.params.noteId === note._id}
				/>
			))}
    <SidebarActionButton onClick={addNote}>
      <p>+ Add Note</p>
    </SidebarActionButton>
		</SidebarContainer>
	);
};

export default withRouter(Sidebar);
