const fs = require("fs");
const path = require("path");
const db = require("./db");

async function seedData() {
  try {
    const filePath = path.join(__dirname, "data", "vendorA.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    for (let item of data) {
      await db.query(
        `INSERT INTO vendor_a (kd_produk, nm_brg, hrg, ket_stok)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (kd_produk) DO NOTHING`,
        [item.kd_produk, item.nm_brg, item.hrg, item.ket_stok]
      );
      console.log(`Inserted: ${item.nm_brg}`);
    }

    console.log("Seeding Finished!");
    process.exit(0);
  } catch (err) {
    console.error("Seed Error:", err);
    process.exit(1);
  }
}

seedData();
