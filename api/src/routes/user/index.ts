import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';

import $get from './$get';
import $put from './$put';
import $post from './$post';

const userRouter = Router();

// Step 2: the function of reading and writing DID Space is implemented
userRouter.get('/', middleware.user(), $get);
userRouter.put('/', middleware.user(), $put);
userRouter.post('/', middleware.user(), $post);

export default userRouter;
