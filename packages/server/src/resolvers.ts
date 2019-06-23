import { IResolvers } from 'apollo-server';
import { Note, NoteType, BlockType, Block } from './models';

const resolvers: IResolvers = {
	Query: {
		notes: async (): Promise<NoteType[]> => {
			try {
				const allNotes = await Note.find();
				const allNotesWithBlocks = await Promise.all(
					allNotes.map(async note => {
						note.blocks = await Block.find({ noteId: note.id });
						return note;
					})
				);
				return allNotesWithBlocks;
			} catch (error) {
				throw new Error(error.message);
			}
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
		deleteNote: async (_, { id }): Promise<string> => {
			await Block.deleteMany({ noteId: id });
			await Note.deleteOne({ _id: id });
			return `Successfully deleted note: ${id}`;
		},
		createBlock: async (_, { noteId, mode, content }): Promise<BlockType> => {
			const block = await new Block({ noteId, mode, content }).save();
			return block;
		},
		editBlock: async (_, { id, content }): Promise<BlockType> => {
			const updatedBlock = await Block.updateOne({ _id: id }, { content });
			return updatedBlock;
		},
		deleteBlock: async (_, { id }): Promise<string> => {
			await Block.deleteOne({ _id: id });
			return `Successfully deleted block: ${id}`;
		}
	}
};

export default resolvers;
