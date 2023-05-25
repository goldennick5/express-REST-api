const express = require("express");
require("dotenv").config();
const connectDB = require("./data/db");
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

try {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
  connectDB();
} catch (error) {
  console.log(error);
}
