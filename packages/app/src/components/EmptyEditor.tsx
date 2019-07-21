import React from 'react';
import { EmptyEditorContainer } from './elements';

const EmptyEditor = () => (
	<EmptyEditorContainer>
		<div>
			<h1>No note selected</h1>
			<h3>Please select or create one from the sidebar.</h3>
		</div>
	</EmptyEditorContainer>
);

export default EmptyEditor;
