const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  if (!products) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const products = await productService.getById(id);
  if (!products) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(products);
};

module.exports = { getAll, getById };