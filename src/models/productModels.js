const db = require('./db');

const getAll = async () => {
  const [products] = await db.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [[products]] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
  return products;
};

module.exports = { getAll, getById };