import type { Request, Response } from "express";

import UserDb from "../../models/user";

export default async function $put(req: Request, res: Response) {
  const payload = req.body;
  const updated = await UserDb.update({ _id: req.params.id }, { $set: payload });

  return res.json(updated);
}
