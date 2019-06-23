import React from 'react';
import { SidebarItemContainer } from './elements';

interface SidebarItemProps {
	title: string;
}

const SidebarItem = ({ title }: SidebarItemProps) => (
	<SidebarItemContainer selected={true}>{title}</SidebarItemContainer>
);

export default SidebarItem;
