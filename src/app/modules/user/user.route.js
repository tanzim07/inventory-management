/*
 * File           : user.route.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:03:36
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

import express from 'express';
import { userController } from './user.controller.js';
const router = express.Router();

router.get('/get-all', userController.getAllDataFromDB);

router.post('/create', userController.createDataToDB);

router.patch('/update/:id', userController.updateDataByIdInDB);

router.delete('/delete/:id', userController.deleteDataByIdFromDB);

router.get('/get-single/:id', userController.getDataByIdFromDB);

export const UsersRoutes = router;
