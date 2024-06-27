import type { Request, Response } from "express";

import UserDb from "../../models/user";

export default async function $put(req: Request, res: Response) {
  const payload = req.body;
  if (!payload.username || !payload.email || !payload.phone) {
    return res.status(400).send('请填写完整用户信息！');
  }
  const inserted = await UserDb.insert(payload);

  return res.json({ ...inserted, id: inserted._id });
}
