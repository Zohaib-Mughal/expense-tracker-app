import Transaction from '../models/Transaction.js';
import mongoose from "mongoose";



export const getTransactions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Execute concurrently to optimize network latency
    const [transactions, total] = await Promise.all([
      Transaction.find({ user: req.user })
      .sort({ date: -1 }).skip(skip).limit(limit),
      Transaction.countDocuments({
    user: req.user
})
    ]);

    res.status(200).json({
      success: true,
      count: transactions.length,
      pagination: { total, page, pages: Math.ceil(total / limit) },
      data: transactions
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error fetching transactions' });
  }
};


export const createTransaction = async (req, res) => {
  try {
   const transaction = await Transaction.create({
  ...req.body,
  user: req.user,
});
    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error creating transaction' });
  }
};


export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ _id: req.params.id, user: req.user });
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    await transaction.deleteOne();
    res.status(200).json({ success: true, message: 'Transaction removed smoothly' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error removing transaction' });
  }
};

export const getSummary = async (req, res) => {
  try {
    const stats = await Transaction.aggregate([
  {
    $match: {
      user: new mongoose.Types.ObjectId(req.user),
    },
  },
  {
    $group: {
      _id: "$type",
      totalAmount: {
        $sum: "$amount",
      },
    },
  },
]);

    let income = 0;
    let expense = 0;

    stats.forEach(item => {
      if (item._id === 'INCOME') income = item.totalAmount;
      if (item._id === 'EXPENSE') expense = item.totalAmount;
    });

    res.status(200).json({
      success: true,
      data: {
        income,
        expense,
        balance: income - expense
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error calculating analytics summaries' });
  }
};