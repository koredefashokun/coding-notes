import React from 'react';
import { useMutation } from 'urql';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './prism-github.css';
import { BlockCodeTextarea } from './elements';

interface CodeTextareaProps {
	blockId: string;
	content: string;
}

const mutation = `
	mutation EditBlock($id: String!, $content: String!) {
		editBlock(id: $id, content: $content) {
			_id
			content
		}
	}
`;

const CodeTextarea = ({ blockId, content }: CodeTextareaProps) => {
	const [code, setCode] = React.useState(content);
	// TODO: Add support for multiple languages
	const [{ fetching }, execute] = useMutation(mutation);
	const handleChange = async (code: string) => {
		await setCode(code);
		execute({ id: blockId, content: code });
	};

	const refetch = React.useCallback(() => {
		// Call the code to refetchQueries and get the component up to speed with the latest info.
	}, []);

	return (
		<BlockCodeTextarea
			value={code}
			onValueChange={handleChange}
			highlight={code => highlight(code, languages.js, 'js')}
		/>
	);
};

export default CodeTextarea;
