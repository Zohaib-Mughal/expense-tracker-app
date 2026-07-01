export const validateTransaction = (req, res, next) => {
  const { amount, type, category, date } = req.body;

  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid or missing amount. Must be a positive number.' });
  }

  if (!type || !['INCOME', 'EXPENSE'].includes(type)) {
    return res.status(400).json({ success: false, message: 'Invalid or missing type. Must be INCOME or EXPENSE.' });
  }

  if (!category || typeof category !== 'string' || category.trim() === '') {
    return res.status(400).json({ success: false, message: 'Category is required.' });
  }

  if (date && isNaN(Date.parse(date))) {
    return res.status(400).json({ success: false, message: 'Invalid date format.' });
  }

  next();
};