const express = require('express');
const productController = require('../controllers/productController');
const validation = require('../middlewares/validationProducts');

const route = express.Router();

route.get('/', productController.getAll);

route.get('/:id', productController.getById);

route.post('/', validation, productController.insertProduct);

module.exports = route;