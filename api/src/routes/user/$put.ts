import type { Request, Response } from 'express';
import { Database } from '@blocklet/sdk';

import { USER_DB } from '../../constants';

export default async function $put(req: Request, res: Response) {
  const payload = req.body;
  const db = new Database(USER_DB);
  await db.update({}, payload);

  return res.send();
}
