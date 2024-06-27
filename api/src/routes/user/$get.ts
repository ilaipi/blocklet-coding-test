import type { Request, Response } from "express";

import UserDb from "../../models/user";

export default async function $get(_req: Request, res: Response) {
  try {
    const userProfile = await UserDb.findOne({});
    if (!userProfile) {
      res.send();
      return;
    }
    return res.json({ ...userProfile, id: userProfile._id });
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}
