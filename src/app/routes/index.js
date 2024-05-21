/*
 * File           : index.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:24:33
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
import { UsersRoutes } from '../modules/user/user.route.js';
import { InventoryRoutes } from '../modules/inventory/inventory.route.js';
import { OrderRoutes } from '../modules/order/order.route.js';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UsersRoutes,
  },
  {
    path: '/product',
    route: InventoryRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
