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

module.exports = {
  insertSale,
};