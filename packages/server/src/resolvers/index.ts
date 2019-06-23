import { IResolvers } from 'apollo-server';
import { Note, NoteType } from '../models';

const resolvers: IResolvers = {
	Query: {
		notes: async (): Promise<NoteType[]> => {
			const allNotes = await Note.find();
			return allNotes;
		},
		note: async (_, { id }): Promise<NoteType> => {
			const singleNote = await Note.findOne({ _id: id });
			return singleNote;
		}
	},
	Mutation: {
		createNote: async (_, { title }): Promise<NoteType> => {
			const note = await new Note({ title }).save();
			return note;
		}
	}
};

export default resolvers;
