import { Router } from 'express';
import ProductRoutes from './products.routes';
import UserRoutes from './user.routes';

const router = Router();

router.use('/products', ProductRoutes);
router.use('/users', UserRoutes);

export default router;
