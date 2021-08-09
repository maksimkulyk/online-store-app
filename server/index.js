const express = require("express");
require("dotenv").config();
const sequelize = require("./db");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
