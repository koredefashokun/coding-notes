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
}

const mutation = `
	mutation EditBlock($id: String!, $content: String!) {
		editBlock(id: $id, content: $content) {
			_id
			content
		}
	}
`;

const CodeTextarea = ({ blockId }: CodeTextareaProps) => {
	const [code, setCode] = React.useState('');
	// TODO: Add support for multiple languages
	const [data, execute] = useMutation(mutation);
	const handleChange = async (code: string) => {
		await setCode(code);
		execute({ id: blockId, content: code });
	};

	return (
		<BlockCodeTextarea
			value={code}
			onValueChange={handleChange}
			highlight={code => highlight(code, languages.js, 'js')}
		/>
	);
};

export default CodeTextarea;
