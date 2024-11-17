const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./DataBase/mongodb"); // Correctly imports the function
const productcontroller = require("./routes/productroute");
const ordercontroller = require("./routes/orderroutes");
const path = require("path");

app.use(express.json());
dotenv.config({ path: path.join(__dirname, "env", "config.env") });

database(); // database function

app.use("/api/v1", productcontroller);
app.use("/api/v1", ordercontroller);

app.listen(process.env.PORT, () => {
  console.log(`This is running at port ${process.env.PORT}`);
});
