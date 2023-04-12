import { Note } from "../schemas/Note";

export const getNotes = () => {
  return Note.find()
};

export const addNote = async (payload: any) => {
  const newNote = await new Note(payload);
  await newNote.save();
};
