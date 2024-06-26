import type { Request, Response } from 'express';
import { Database } from '@blocklet/sdk';

import { USER_DB } from '../../constants';

export default async function $get(_req: Request, res: Response) {
  try {
    const db = new Database(USER_DB);
    const userProfile = await db.findOne({});
    return res.json(userProfile);
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}
