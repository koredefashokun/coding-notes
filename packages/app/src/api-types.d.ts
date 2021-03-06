interface Block {
	_id: string;
	noteId: string;
	mode: 'text' | 'code';
	content: string;
}

interface Note {
	_id: string;
	title: string;
	blocks: Block[];
}
