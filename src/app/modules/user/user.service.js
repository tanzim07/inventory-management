/*
 * File           : user.service.js
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
  const user = await prisma.user.create({ data });
  return { user };
};

const getAllDataService = async () => {
  const users = await prisma.user.findMany();
  return { users };
};
const updateDataByIdService = async (id, data) => {
  const user = await prisma.user.update({ where: { id: id }, data });
  return { user };
};
const deleteDataByIdService = async (id) => {
  const user = await prisma.user.delete({ where: { id: id } });
  return { user };
};
const getDataByIdService = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  return { user };
};

export const userService = {
  createDataService,
  getAllDataService,
  updateDataByIdService,
  deleteDataByIdService,
  getDataByIdService,
};
