import type { Request, Response } from "express";

import UserDb from "../../models/user";

export default async function $put(req: Request, res: Response) {
  const payload = req.body;
  if (!payload.username && !payload.email && !payload.phone) {
    return res.status(400).send('请至少更新一个必填字段！');
  }
  const updated = await UserDb.update({ _id: req.params.id }, { $set: payload });

  return res.json(updated);
}
