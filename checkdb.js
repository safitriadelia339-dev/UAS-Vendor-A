const db = require('./db');

db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
    if (err) return console.log("DB ERROR:", err);
    console.log("Tables:", rows);
});
