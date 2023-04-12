// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "@/database";
import { addNote } from "@/database/controllers/Note";

type TNote = {
  title: String;
  content: String;
  userId: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(await database.connect())) return false;
  console.log("body", req.body);

  try {
    await addNote(req.body);
    return res.status(200).json({ data: req.body });
  } catch (error) {
    res.send(error);
  }
}
