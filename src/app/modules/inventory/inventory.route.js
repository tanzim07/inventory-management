/*
 * File           : inventory.route.js
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
import { inventoryController } from './inventory.controller.js';
const router = express.Router();

router.get('/get-all', inventoryController.getAllDataFromDB);

router.post('/create', inventoryController.createDataToDB);

router.patch('/update/:id', inventoryController.updateDataByIdInDB);

router.delete('/delete/:id', inventoryController.deleteDataByIdFromDB);

router.get('/get-single/:id', inventoryController.getDataByIdFromDB);

export const InventoryRoutes = router;
