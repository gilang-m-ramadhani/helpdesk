const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

// Routes
const keluhanRoutes = require("./routes/keluhanRoutes");
app.use("/api/keluhan", keluhanRoutes);

app.listen(3000, () => {
  console.log("✔ Server running on port 3000");
});
