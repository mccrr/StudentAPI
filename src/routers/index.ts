import { Router } from 'express';
import authRouter from '../routers/auth.router';
import { authMiddleware } from '../middleware/auth.middleware';
import classesRouter from '../routers/class.router';

const router = Router();
router.use('/auth', authRouter);
router.use('/classes', classesRouter);


export default router;