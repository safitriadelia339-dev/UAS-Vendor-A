const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    vendor: "Vendor A",
    message: "Vendor A API is running",
    endpoints: {
      allProducts: "/products",
      productById: "/products/:id"
    }
  });
});

app.use("/products", require("./API/produk"));

app.listen(3000, () => {
  console.log("Vendor A running on http://localhost:3000");
});

module.exports = app;
