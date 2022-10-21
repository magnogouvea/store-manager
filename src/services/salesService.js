const salesModels = require('../models/salesModels');
const productModels = require('../models/productModels');

const insertSale = async (sale) => {
  const productsId = (await productModels.productId()).map((obj) => obj.id);
  const salesId = sale.map(({ productId }) => productId);
  if (!salesId.every((id) => productsId.includes(id))) {
    const message = { message: 'Product not found' };
    return { status: 404, message };
  }
  const newSale = await salesModels.newSale(sale);
  return { status: 201, message: newSale };
};

const allSales = async (sale) => {
  const sales = await salesModels.allSales(sale);
  if (!sales) {
    const message = { message: 'Sale not found' };
    return { status: 404, message };
  }
  return { status: 201, message: sales };
};

const findSaleById = async (id) => {
  const sales = await salesModels.findSaleById(id);
  if (sales.length === 0) {
    const message = { message: 'Sale not found' };
    return { status: 404, message };
  }
  return { status: null, message: sales };
};

module.exports = {
  insertSale,
  allSales,
  findSaleById,
};