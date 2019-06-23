import React from 'react';
import { useQuery } from 'urql';
import { SidebarContainer } from './elements';
import SidebarItem from './SidebarItem';

interface Note {
	_id: string;
	title: string;
}

interface SidebarProps {
	collapsed: boolean;
}

const query = `{ notes { _id, title } }`;

const Sidebar = ({ collapsed }: SidebarProps) => {
	const [{ data, error }] = useQuery<{ notes: Note[] }>({ query });
	if (!data || error) return <p>Error or empty</p>;
	return (
		<SidebarContainer>
			{data.notes.map((note, index) => (
				<SidebarItem key={index} title={note.title} />
			))}
		</SidebarContainer>
	);
};

export default Sidebar;
