import React from 'react';
import { LinkProps } from 'react-router-dom';
import { SidebarItemContainer } from './elements';
import SidebarActions from './SidebarActions';

interface SidebarItemProps extends LinkProps {
  selected: boolean;
  id: string;
	title: string;
}

const SidebarItem = ({ selected, id, title, to }: SidebarItemProps) => {
  return (
    <>
      <SidebarItemContainer {...{ to, selected }}>
        <p>{title}</p>
      </SidebarItemContainer>     
      <SidebarActions noteId={id} />
    </>
  );
};

export default SidebarItem;
