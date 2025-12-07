const express = require("express");
const router = express.Router();
const db = require("../db");

// GET semua produk
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM vendor_a");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET produk by id
router.get("/:id", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM vendor_a WHERE kd_produk = $1",
      [req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Produk tidak ditemukan" });

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
