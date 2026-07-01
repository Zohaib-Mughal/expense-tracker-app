import express from "express";

import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  getSummary,
} from "../controllers/transactionController.js";

import { validateTransaction } from "../middleware/validate.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/summary", protect, getSummary);

router
  .route("/")
  .get(protect, getTransactions)
  .post(protect, validateTransaction, createTransaction);

router.delete("/:id", protect, deleteTransaction);

export default router;