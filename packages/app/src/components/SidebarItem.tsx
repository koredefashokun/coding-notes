import React from 'react';
import { LinkProps } from 'react-router-dom';
import { SidebarItemContainer } from './elements';
import SidebarActions from './SidebarActions';

interface SidebarItemProps extends LinkProps {
  selected: boolean;
  id: string;
	title: string;
}

const SidebarItem = ({ selected, id, title, to }: SidebarItemProps) => (
  <SidebarItemContainer {...{ to, selected }}>
    <p>{title}</p>
    <SidebarActions noteId={id} />
  </SidebarItemContainer>     
);

export default SidebarItem;
