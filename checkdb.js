const db = require("./db");

async function checkConnection() {
  try {
    const result = await db.query("SELECT NOW()");
    console.log("Database connected at:", result.rows[0].now);
  } catch (err) {
    console.error("DB connection error:", err.message);
  }
}

checkConnection();
