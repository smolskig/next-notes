import mongoose from "mongoose";

const dbName = `notes-app`;
const dbUrl = `mongodb+srv://smolskinotes:pwd@cluster-notes.ry8s69q.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function connect() {
  return await mongoose.connect(dbUrl);
}

async function disconnect() {
  return await mongoose.disconnect();
}

export default { connect, disconnect };
