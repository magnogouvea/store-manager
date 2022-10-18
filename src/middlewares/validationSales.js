module.exports = (req, res, next) => {
  if (!req.body.every((obj) => Object.keys(obj).includes('productId'))) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!req.body.every((obj) => Object.keys(obj).includes('quantity'))) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (!req.body.every((obj) => obj.quantity > 0)) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

// module.exports = {
//   salesValidation,
// };
