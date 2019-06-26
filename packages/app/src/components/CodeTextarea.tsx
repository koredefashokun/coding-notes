import React from 'react';
import { useMutation } from 'urql';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './prism-github.css';
import { BlockCodeTextarea } from './elements';
import { editBlock } from '../graphql';

interface CodeTextareaProps {
	blockId: string;
	mode: Block['mode'];
	initialContent: string;
}

const CodeTextarea = ({ blockId, mode, initialContent }: CodeTextareaProps) => {
	const [content, setContent] = React.useState(initialContent);
	// TODO: Add support for multiple languages
	const [, execute] = useMutation(editBlock);
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
		<textarea
			placeholder='Some text here'
			value={content}
			onChange={e => handleChange(e.target.value)}
		/>
	);
};

export default CodeTextarea;
