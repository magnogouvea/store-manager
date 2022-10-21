const salesService = require('../services/salesService');

const newSale = async (req, res) => {
  const { status, message } = await salesService.insertSale(req.body);
  return res.status(status).json(message);
};

const allSales = async (req, res) => {
  const { status, message } = await salesService.allSales();
  if (status) {
    return res.status(status).json((message));
  }
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesService.findSaleById(id);
  if (status) {
    return res.status(status).json(message);
  }
};

module.exports = {
  newSale,
  allSales,
  findSaleById,
};
