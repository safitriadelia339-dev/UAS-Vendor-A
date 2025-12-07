// db.js
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_6l0RfHUEhdWS@ep-snowy-wind-a16usyou-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});

module.exports = pool;
