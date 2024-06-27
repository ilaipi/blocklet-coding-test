import type { Request, Response } from "express";

import UserDb from "../../models/user";

export default async function $put(req: Request, res: Response) {
  const payload = req.body;
  const inserted = await UserDb.insert(payload);

  return res.json({ ...inserted, id: inserted._id });
}
