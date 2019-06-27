import React from 'react';
import { BlockCustomTextarea } from './elements';

interface CustomTextareaProps {
	content: string;
	onChange(content: string): void;
}

const CustomTextarea = ({ content, onChange }: CustomTextareaProps) => {
	const [rows, setRows] = React.useState(1);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		// Recalculate the height of the textarea.
		setRows(rows + 1);
		onChange(event.target.value);
	};

	return (
		<BlockCustomTextarea
			placeholder='Some text here'
			value={content}
			onChange={handleChange}
			// {...{ rows }}
		/>
	);
};

export default CustomTextarea;
