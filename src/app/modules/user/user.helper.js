/*
 * File           : user.helper.js
 * Project        : inventory-management
 * Created Date   : We 22 May 2024 01:23:43
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed May 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const generateToken = async (data) => {
  return await jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const userHelper = {
  hashPassword,
  comparePassword,
  generateToken,
};
