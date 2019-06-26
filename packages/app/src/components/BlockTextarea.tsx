import React from 'react';
import { useMutation } from 'urql';
import { editBlock } from '../graphql';
import CodeTextarea from './CodeTextarea';
import CustomTextarea from './CustomTextarea';

interface BlockTextareaProps {
	blockId: string;
	mode: Block['mode'];
	initialContent: string;
}

const BlockTextarea = (props: BlockTextareaProps) => {
	const { blockId, mode, initialContent } = props;
	const [content, setContent] = React.useState(initialContent);
	// TODO: Add support for multiple languages
	const [, execute] = useMutation(editBlock);
	const handleChange = async (content: string) => {
		await setContent(content);
		execute({ id: blockId, content });
	};

	return mode === 'code' ? (
		<CodeTextarea content={content} onChange={handleChange} />
	) : (
		<CustomTextarea content={content} onChange={handleChange} />
	);
};

export default BlockTextarea;
