import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getClassInfo } from "../controllers/classes.controller";
import { classMiddleware } from '../middleware/classes.middleware';

const router = Router();

router.get('/:code', authMiddleware, classMiddleware, getClassInfo);

export default router;