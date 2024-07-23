import { Router } from "express";
import {signin} from '../controllers/auth.controller'

const router = Router();

router.get('/signin', signin);

export default router;