import prisma from '../config/prismaClient';
import * as bcryptjs from 'bcryptjs';
import { generateToken } from '../utils/generateToken';
import { catchAsyncErrors } from '../utils/errorHandlers';

// @desc   Authenticate user, sends token
// @route  POST /api/users/login
// @access Public
export const authenticateUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!foundUser) {
    res.status(400);
    throw new Error('Incorrect email or password.');
  }

  // password match
  const hasMatchingPasswords = await bcryptjs.compare(
    password,
    foundUser.password
  );

  if (!hasMatchingPasswords) {
    res.status(400);
    throw new Error('Incorrect email or password.');
  }

  res.json({
    id: foundUser.id,
    name: foundUser.name,
    email,
    isAdmin: foundUser.isAdmin,
    token: generateToken(foundUser),
  });
  return;
});
