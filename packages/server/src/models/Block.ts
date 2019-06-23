import { model, Schema, Document } from 'mongoose';

export interface BlockType extends Document {
	mode: 'text' | 'code';
}

export const BlockSchema = new Schema({
	noteId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Note'
	},
	mode: {
		type: String,
		required: true
	},
	content: {
		type: String
	}
});

export const Block = model<BlockType>('Block', BlockSchema);
