import prisma from '../config/prismaClient';
import { catchAsyncErrors } from '../utils/errorHandlers';

// @desc   Get all products
// @route  GET /api/products
// @access Public
export const getAllProducts = catchAsyncErrors(async (_, res) => {
  const products = await prisma.product.findMany({});

  res.json(products);
  return;
});

// @desc   Get product by id
// @route  GET /api/products/:id
// @access Public
export const getProductById = catchAsyncErrors(async (req, res) => {
  const { productId } = req.params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(productId),
    },
  });

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
  return;
});
