import React from 'react';
import { SidebarContainer } from './elements';

interface SidebarProps {
	collapsed: boolean;
}

const Sidebar = ({ collapsed = false }: SidebarProps) => {
	return <SidebarContainer />;
};

export default Sidebar;
