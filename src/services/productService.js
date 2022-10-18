const productModel = require('../models/productModels');

const getAll = async () => {
  const data = await productModel.getAll();
  return data;
};

const getById = async (id) => {
  const data = await productModel.getById(id);
  return data;
};

const insertProduct = async (name) => {
  const insertId = await productModel.insertProduct(name);
  return { id: insertId, name };
};

module.exports = { getAll, getById, insertProduct };