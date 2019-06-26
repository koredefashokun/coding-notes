import React from 'react';
import { useMutation } from 'urql';
import { SidebarActionContainer } from './elements';
import { deleteNote } from '../graphql';

interface SidebarActionProps {
	noteId: string;
}

const SidebarActions = ({ noteId }: SidebarActionProps) => {
	const [, executeMutation] = useMutation(deleteNote);
	const onClick = () => executeMutation({ id: noteId });

	return (
		<SidebarActionContainer {...{ onClick }}>Delete</SidebarActionContainer>
	);
};

export default SidebarActions;
