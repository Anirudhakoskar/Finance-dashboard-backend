import Record from "../models/record.model.js";

// ✅ CREATE RECORD =>>>>
export const createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      userId: req.user.id
    });

    res.status(201).json(record);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET RECORDS (👉 add here)
export const getRecords = async (req, res) => {
  try {
    const { type, category } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//update Records >>

export const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Record.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};  


// Delete Records >>

export const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Record.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Record deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
