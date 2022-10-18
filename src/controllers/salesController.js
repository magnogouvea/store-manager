const salesService = require('../services/salesService');

const newSale = async (req, res) => {
  const { status, message } = await salesService.insertSale(req.body);
  return res.status(status).json(message);
};

module.exports = {
  newSale,
};
