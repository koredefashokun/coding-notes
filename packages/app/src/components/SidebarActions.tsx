import React from 'react';
import { useMutation } from 'urql';
import { SidebarActionContainer } from './elements';

const mutation = `
  mutation DeleteNote ($id: String!) {
    deleteNote(id: $id) { _id }
  }
`;

interface SidebarActionProps {
  noteId: string;
}

const SidebarActions = ({ noteId }: SidebarActionProps) => {
  const [, executeMutation] = useMutation(mutation);
  const onClick = () => executeMutation({ id: noteId });

  return (
    <SidebarActionContainer {...{ onClick }}>
      Delete
    </SidebarActionContainer>
  );
};

export default SidebarActions;

