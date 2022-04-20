import { Router } from 'express';
import ProductRoutes from './products.routes';

const router = Router();

router.use('/products', ProductRoutes);

export default router;
