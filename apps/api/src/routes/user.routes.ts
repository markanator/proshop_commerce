import { Router } from 'express';
import { localUserLogin, getUserProfile } from '../controllers/user.controller';
import { authenticatedGaurd } from '../middlware/auth.mw';

const router = Router();

// AUTH STUFF
router.post('/login', localUserLogin);

// PROFILES
router.get('/profile', authenticatedGaurd, getUserProfile);

export default router;
