import {
  Model,
  Models,
  Schema,
  SchemaDefinition,
  model,
  models,
} from "mongoose";

const NoteSchema = new Schema({
  title: String,
  content: String,
  userId: String,
});

const Note = models.Note || model("Note", NoteSchema);

export { Note, NoteSchema };
