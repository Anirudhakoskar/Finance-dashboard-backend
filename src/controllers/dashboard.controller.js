import Record from "../models/record.model.js";
import mongoose from "mongoose";

// ✅ SUMMARY =>>>>
export const getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const records = await Record.find({ userId });

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach(r => {
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;
    });

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      totalTransactions: records.length
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ CATEGORY BREAKDOWN (👉 add here)
export const getCategoryBreakdown = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await Record.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
