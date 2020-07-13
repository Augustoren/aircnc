const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

if (!config.get("DBKEY")) {
  console.error("FATAL ERROR: MongoDB access key is not defined.");
  process.exit(1);
}

mongoose
  .connect(config.get("DBKEY"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("[OK] -> Database connected.");
  })
  .catch((err) => console.log("[ERROR] -> Database connection error."));

app.use(express.json());
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[OK] -> Server running on port ${PORT}`);
});
