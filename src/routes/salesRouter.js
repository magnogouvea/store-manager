const express = require('express');
const salesController = require('../controllers/salesController');
const salesValidation = require('../middlewares/validationSales');

const router = express.Router();

router.get('/', salesController.allSales);
router.get('/:id', salesController.findSaleById);

router.post('/', salesValidation, salesController.newSale);

module.exports = router;
