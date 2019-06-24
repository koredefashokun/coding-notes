import { model, Schema, Document } from 'mongoose';

export interface BlockType extends Document {
	noteId: string;
	mode: 'text' | 'code';
	content: string;
}

export const BlockSchema = new Schema({
	noteId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Note'
	},
	mode: {
		type: String,
		enum: ['text', 'code'],
		required: true
	},
	content: {
		type: String
	}
});

export const Block = model<BlockType>('Block', BlockSchema);
