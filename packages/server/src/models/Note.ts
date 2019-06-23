import { model, Schema, Document } from 'mongoose';

export interface NoteType extends Document {
	title: string;
}

const NoteSchema = new Schema({
	title: {
		type: String,
		required: true
	}
});

export const Note = model<NoteType>('Note', NoteSchema);
