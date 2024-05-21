/*
 * File           : inventory.controller.js
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
import { inventoryService } from './inventory.service.js';

const getAllDataFromDB = handleTryCatch(async (req, res, next) => {
  const { products } = await inventoryService.getAllDataService();
  handleResponse({ res, statusCode: 200, status: 'success', message: 'Products fetched successfully', data: products });
});

const createDataToDB = handleTryCatch(async (req, res, next) => {
  const { product } = await inventoryService.createDataService(req.body);
  handleResponse({ res, statusCode: 201, status: 'success', message: 'Product created successfully', data: product });
});

const updateDataByIdInDB = handleTryCatch(async (req, res, next) => {
  const { product } = await inventoryService.updateDataByIdService(parseInt(req.params.id), req.body);
  handleResponse({ res, statusCode: 200, status: 'success', message: 'Product updated successfully', data: product });
});

const deleteDataByIdFromDB = handleTryCatch(async (req, res, next) => {
  const { product }= await inventoryService.deleteDataByIdService(parseInt(req.params.id));
  handleResponse({ res, statusCode: 200, status: 'success', message: 'Product deleted successfully', data: product });
});

const getDataByIdFromDB = handleTryCatch(async (req, res, next) => {
  const { product } = await inventoryService.getDataByIdService(parseInt(req.params.id));
  handleResponse({ res, statusCode: 200, status: 'success', message: 'Product fetched successfully', data: product });
});

export const inventoryController = {
  getAllDataFromDB,
  createDataToDB,
  updateDataByIdInDB,
  deleteDataByIdFromDB,
  getDataByIdFromDB,
};
