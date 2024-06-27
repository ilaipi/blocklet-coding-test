import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';

import $get from './$get';
import $put from './$put';
import $post from './$post';

const userRouter = Router();

userRouter.get('/', middleware.user(), $get);
userRouter.put('/:id', middleware.user(), $put);
userRouter.post('/', middleware.user(), $post);

export default userRouter;
