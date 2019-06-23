import { model, Schema, Document } from 'mongoose';
import { BlockType } from './Block';

export interface NoteType extends Document {
	title: string;
	blocks: BlockType[];
}

const NoteSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

export const Note = model<NoteType>('Note', NoteSchema);
