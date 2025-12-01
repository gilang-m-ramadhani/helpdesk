const keluhanModel = require("../models/keluhanModel");

module.exports = {
  getAll: (req, res) => {
    keluhanModel.getAll((err, results) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.json(results);
    });
  },

  create: (req, res) => {
    const data = req.body;

    keluhanModel.create(data, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.json({ message: "Keluhan berhasil ditambahkan", id: result.insertId });
    });
  },
};
