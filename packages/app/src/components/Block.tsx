import React from 'react';

interface BlockProps {
	content: string;
}

const Block = ({ content }: BlockProps) => {
	const [mode, setMode] = React.useState('text');
	return <div>{content}</div>;
};

export default Block;
