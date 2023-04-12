// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "@/database";
import { getNotes } from "@/database/controllers/Note";

type TNote = {
  title: String;
  content: String;
  userId: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TNote>>
) {
  await database.connect();

  getNotes()
    .then((data: TNote[]) => {
      return res.status(200).json(data);
    })
    .catch((err) => res.send(err))
    .finally(async () => await database.disconnect());
}
