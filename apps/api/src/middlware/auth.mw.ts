import * as jwt from 'jsonwebtoken';
import prisma from '../config/prismaClient';
import { catchAsyncErrors } from '../utils/errorHandlers';

export const authenticatedGaurd = catchAsyncErrors(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await prisma.user.findUnique({
        where: {
          id: Number(decoded.sub),
        },
        rejectOnNotFound: true,
      });

      delete user.password;

      req.user = user;

      next();
    } catch (error) {
      console.error(error?.message);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export const adminRoleGuard = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.statusCode(403);
    throw new Error('Not authorized as an admin');
  }
};
