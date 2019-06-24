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
	mode: Block['mode'];
	initialContent: string;
}

const mutation = `
	mutation EditBlock($id: String!, $content: String!) {
		editBlock(id: $id, content: $content) {
			_id
			content
		}
	}
`;

const CodeTextarea = ({ blockId, mode, initialContent }: CodeTextareaProps) => {
	const [content, setContent] = React.useState(initialContent);
	// TODO: Add support for multiple languages
	const [{ fetching }, execute] = useMutation(mutation);
	const handleChange = async (content: string) => {
		await setContent(content);
		execute({ id: blockId, content });
	};

	return mode === 'code' ? (
		<BlockCodeTextarea
			value={content}
			onValueChange={handleChange}
			highlight={code => highlight(code, languages.js, 'js')}
		/>
	) : (
		<textarea value={content} onChange={e => handleChange(e.target.value)} />
	);
};

export default CodeTextarea;
