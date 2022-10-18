const db = require('./db');

const newSale = async (sale) => {
  console.log({ sale });
  const [date] = await db.execute('INSERT INTO sales (date) VALUE (now())');
  await Promise.all(sale.map((sales) => db.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
    [date.insertId, sales.productId, sales.quantity],
  ))); // com ajuda do André 
  return { id: date.insertId, itemsSold: sale };
};

module.exports = { newSale };