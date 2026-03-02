const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let products = {}; // Demo storage (replace with blockchain call)

app.post("/register", async (req, res) => {
  const { productId, name, manufacturer } = req.body;

  if (products[productId]) {
    return res.status(400).json({ message: "Product already exists" });
  }

  products[productId] = { name, manufacturer };

  const qrData = `http://localhost:3000/verify.html?id=${productId}`;
  const qrCode = await QRCode.toDataURL(qrData);

  res.json({ message: "Product Registered", qrCode });
});

app.get("/verify/:id", (req, res) => {
  const product = products[req.params.id];

  if (!product) {
    return res.json({ valid: false });
  }

  res.json({ valid: true, product });
});

app.listen(5000, () => console.log("Server running on port 5000"));
