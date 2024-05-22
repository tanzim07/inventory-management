/*
 * File           : auth.service.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:03:54
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Tue May 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { PrismaClient } from '@prisma/client';
import { userHelper } from '../user/user.helper.js';
const prisma = new PrismaClient();

const loginService = async (data) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });
  const isMatched = await userHelper.comparePassword(data.password, user.password);
  if (!isMatched) {
    throw new Error('Invalid login credentials');
  } else {
    const data = { email: user.email, id: user.id };
    const token = await userHelper.generateToken(data);
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }
};

const logOutService = async () => {
  const products = await prisma.product.findMany();
  return { products };
};
const logOutAllService = async (id, data) => {
  const product = await prisma.product.update({ where: { id: id }, data });
  return { product };
};
export const authService = {
  loginService,
  logOutService,
  logOutAllService,
};
