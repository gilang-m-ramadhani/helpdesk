const express = require("express");
const router = express.Router();
const keluhanController = require("../controllers/keluhanController");

// GET semua data keluhan
router.get("/", keluhanController.getAll);

// POST tambah data keluhan
router.post("/", keluhanController.create);
router.post("/", keluhanController.create); 

// Routes untuk halaman form
router.post('/', (req, res) => {
    const data = req.body; // otomatis berisi dari form HTML

    connection.query('INSERT INTO keluhan SET ?', data, (err, result) => {
        if (err) return res.status(500).json({ error: err });

        res.redirect('/'); // kembali ke form
    });
});


module.exports = router;
