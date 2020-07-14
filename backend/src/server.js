const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const path = require("path");
const app = express();

const dbkey = config.get("db_connection_string");

if (!dbkey) {
  console.error("FATAL ERROR: MongoDB access key is not defined.");
  process.exit(1);
}

mongoose
  .connect(dbkey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("[OK] -> Database connected.");
  })
  .catch((err) => console.log("[ERROR] -> Database connection error."));

app.use(cors({}));
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[OK] -> Server running on port ${PORT}`);
});
