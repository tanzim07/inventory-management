/*
 * File           : order.service.js
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
const prisma = new PrismaClient();

const createDataService = async (data) => {
  const result = await prisma.$transaction(async (prisma) => {
    const user = await prisma.user.findUnique({
      where: { id: data.userId },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const product = await prisma.product.findUnique({
      where: { id: data.productId },
    });
    if (!product) {
      throw new Error('Product not found');
    }

    if (product.itemsAvailable <= 0) {
      throw new Error('Product is out of stock');
    }

    const order = await prisma.order.create({
      data: {
        user: { connect: { id: data.userId } },
        product: { connect: { id: data.productId } },
      },
    });

    await prisma.product.update({
      where: { id: data.productId },
      data: { itemsAvailable: { decrement: 1 } },
    });

    return { order };
  });
  return result;
};

const getAllDataService = async () => {
  const products = await prisma.order.findMany();
  return { products };
};

const updateDataByIdService = async (id, data) => {
  const order = await prisma.order.update({ where: { id: id }, data });
  return { order };
};

const deleteDataByIdService = async (id) => {
  const order = await prisma.order.delete({ where: { id: id } });
  return { order };
};

const getDataByIdService = async (id) => {
  const order = await prisma.order.findUnique({
    where: { id: id },
  });
  return { order };
};

export const orderService = {
  createDataService,
  getAllDataService,
  updateDataByIdService,
  deleteDataByIdService,
  getDataByIdService,
};
