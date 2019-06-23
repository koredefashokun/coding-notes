import { IResolvers } from 'apollo-server';
import { Note, NoteType, BlockType, Block } from './models';

const resolvers: IResolvers = {
	Query: {
		notes: async (): Promise<NoteType[]> => {
			const allNotes = await Note.find();
			const allNotesWithBlocks = allNotes.map(async note => {
				const blocks = await Block.find({ noteId: note.id });
				return { ...note, blocks } as NoteType;
			});
			return allNotesWithBlocks;
		},
		note: async (_, { id }): Promise<NoteType> => {
			const singleNote = await Note.findOne({ _id: id });
			const noteBlocks = await Block.find({ noteId: id });
			return Object.assign(singleNote, { blocks: noteBlocks });
		},
		blocks: async (_, { noteId }): Promise<BlockType[]> => {
			const noteBlocks = await Block.find({ noteId });
			return noteBlocks;
		}
	},
	Mutation: {
		createNote: async (_, { title }): Promise<NoteType> => {
			const note = await new Note({ title }).save();
			return note;
		},
		createBlock: async (_, { noteId, mode, content }): Promise<BlockType> => {
			const block = await new Block({ noteId, mode, content }).save();
			return block;
		}
	}
};

export default resolvers;
