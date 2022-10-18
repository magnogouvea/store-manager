const express = require('express');
const salesController = require('../controllers/salesController');
const salesValidation = require('../middlewares/validationSales');

const router = express.Router();

router.post('/', salesValidation, salesController.newSale);

module.exports = router;
