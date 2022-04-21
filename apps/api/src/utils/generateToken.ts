import { User } from '@prisma/client';
import * as jwt from 'jsonwebtoken';

export const generateToken = (user: Partial<User>) => {
  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};
