const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://augusto:augusto@dev.otpbi.mongodb.net/aircnc?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
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
