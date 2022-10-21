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

const allSales = async () => {
  const [sales] = await db.execute(
    `SELECT sale_id AS saleId, date, 
    product_id AS productId, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    ORDER by s.id ASC, product_id;
    `,
  );
  return sales;
};

const findSaleById = async (id) => {
  const [sale] = await db.execute(
    `SELECT date, product_id AS productId, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    WHERE s.id = ?
    ORDER by s.id ASC, product_id;`,
    [id],
  );
  return sale;
};

module.exports = { newSale, allSales, findSaleById };