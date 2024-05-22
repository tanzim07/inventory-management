/*
 * File           : auth.controller.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:03:45
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

import handleResponse from '../../middlewares/hadleResponse.js';
import handleTryCatch from '../../middlewares/handleCatch.js';
import { authService } from './auth.service.js';

const login = handleTryCatch(async (req, res, next) => {
  const { user, token } = await authService.loginService(req.body);
  res.set('Authorization', `Bearer ${token}`);
  handleResponse({
    res,
    statusCode: 200,
    status: 'success',
    message: 'Log in successfully',
    data: { user, token },
  });
});

const logout = handleTryCatch(async (req, res, next) => {
  const { user } = await authService.logOutService(req.body);
  handleResponse({ res, statusCode: 201, status: 'success', message: 'Log out successfully', data: user });
});

const logoutAll = handleTryCatch(async (req, res, next) => {
  const { user } = await authService.logOutAllService(parseInt(req.params.id), req.body);
  handleResponse({
    res,
    statusCode: 200,
    status: 'success',
    message: 'Log out from all devices successfully',
    data: user,
  });
});

export const authController = {
  login,
  logout,
  logoutAll,
};
