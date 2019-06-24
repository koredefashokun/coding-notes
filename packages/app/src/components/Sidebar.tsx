import React from 'react';
import { SidebarContainer } from './elements';
import SidebarItem from './SidebarItem';

interface SidebarProps {
	collapsed: boolean;
	notes: Note[];
}

const Sidebar = ({ collapsed, notes }: SidebarProps) => (
	<SidebarContainer>
		{notes.map((note, index) => (
			<SidebarItem key={index} title={note.title} />
		))}
	</SidebarContainer>
);

export default Sidebar;
