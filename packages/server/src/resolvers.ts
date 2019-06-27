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
			note.blocks = [];
			return note;
		},
		editNote: async (_, { id, title }): Promise<NoteType> => {
			const note = await Note.findOne({ _id: id });
			note.title = title;
			const updatedNote = await note.save();
			return updatedNote;
		},
		clearNote: async (_, { id }): Promise<NoteType> => {
			await Block.deleteMany({ noteId: id });
			const note = await Note.findOne({ _id: id });
			return note;
		},
		deleteNote: async (_, { id }): Promise<{ _id: string }> => {
			await Block.deleteMany({ noteId: id });
			await Note.deleteOne({ _id: id });
      return { _id: id };
		},
		createBlock: async (_, { noteId, mode, content }): Promise<BlockType> => {
			const block = await new Block({ noteId, mode, content }).save();
			return block;
		},
		editBlock: async (_, { id, content }): Promise<BlockType> => {
			try {
				const updatedBlock = await Block.findOne({ _id: id });
				updatedBlock.content = content;
				await updatedBlock.save();
				return updatedBlock;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		deleteBlock: async (_, { id }): Promise<string> => {
			await Block.deleteOne({ _id: id });
			return `Successfully deleted block: ${id}`;
		}
	}
};

export default resolvers;
