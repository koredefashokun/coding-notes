import React from 'react';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';
import { BlockCodeTextarea } from './elements';

interface CodeTextareaProps {
	content: string;
	onChange(content: string): void;
}

const CodeTextarea = ({ content, onChange }: CodeTextareaProps) => (
	<BlockCodeTextarea
		value={content}
		onValueChange={onChange}
		highlight={code => highlight(code, languages.js, 'js')}
	/>
);

export default CodeTextarea;
