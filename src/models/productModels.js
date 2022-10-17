const db = require('./db');

const getAll = async () => {
  const [products] = await db.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [[products]] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
  return products;
};

const insertProduct = async (data) => {
  const [{ insertId }] = await db.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [data],
  );
  return insertId;
};

module.exports = { getAll, getById, insertProduct };
