import middleware from "@blocklet/sdk/lib/middlewares";
import { Router } from "express";

import userRouter from "./user";

const router = Router();

router.use('/user/info', middleware.user(), (req, res) => res.json(req.user || {}));
router.use('/user', middleware.user(), userRouter);

export default router;
