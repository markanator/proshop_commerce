import { Router } from 'express';
import prisma from '../config/prismaClient';
import * as asyncHandler from 'express-async-handler';

const router = Router();

// @desc   Get all products
// @route  GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (_, res) => {
    const products = await prisma.product.findMany({});

    res.json(products);
    return;
  })
);

// @desc   Get product by id
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:productId',
  asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const product = await prisma.product.findFirst({
      where: {
        id: Number(productId),
      },
      rejectOnNotFound: true,
    });
    if (!product) {
      res.status(404).json({
        message: 'Product not found',
      });
      return;
    }

    res.json(product);
    return;
  })
);

export default router;
