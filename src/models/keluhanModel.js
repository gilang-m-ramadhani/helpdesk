const db = require("../../db");

module.exports = {
  getAll: (callback) => {
    db.query("SELECT * FROM keluhan ORDER BY id DESC", callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO keluhan SET ?", data, callback);
  },
};
