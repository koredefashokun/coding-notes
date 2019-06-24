import React from 'react';
import { LinkProps } from 'react-router-dom';
import { SidebarItemContainer } from './elements';

interface SidebarItemProps extends LinkProps {
	title: string;
}

// TODO: Make the item aware of when it is active or not?
const SidebarItem = ({ title, to }: SidebarItemProps) => (
	<SidebarItemContainer selected={true} {...{ to }}>
		{title}
	</SidebarItemContainer>
);

export default SidebarItem;
