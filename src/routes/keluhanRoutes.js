const express = require("express");
const router = express.Router();
const keluhanController = require("../controllers/keluhanController");

// GET semua data keluhan
router.get("/", keluhanController.getAll);

// POST tambah data keluhan
router.post("/", keluhanController.create);
router.post("/", keluhanController.create); 

module.exports = router;
