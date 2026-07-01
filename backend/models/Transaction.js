import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0.01, 'Amount must be greater than 0']
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: {
      values: ['INCOME', 'EXPENSE'],
      message: '{VALUE} is not a valid transaction type'
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true,
    maxLength: [255, 'Description cannot exceed 255 characters'],
    default: ''
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now
  }
}, {
  timestamps: true 
});

TransactionSchema.index({ date: -1 });

export default mongoose.model('Transaction', TransactionSchema);