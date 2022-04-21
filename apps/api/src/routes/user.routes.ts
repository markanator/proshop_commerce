import { Router } from 'express';
import { authenticateUser } from '../controllers/user.controller';

const router = Router();

router.post('/login', authenticateUser);

export default router;
