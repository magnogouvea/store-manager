const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  if (!products) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const products = await productService.getById(id);
  if (!products) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(products);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productService.insertProduct(name);
  return res.status(201).json(product);
};

module.exports = { getAll, getById, insertProduct };