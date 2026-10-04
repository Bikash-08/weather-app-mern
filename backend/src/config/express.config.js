const express = require("express");
const cors = require("cors");

const weatherRouter = require("../routes/weather.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/weather", weatherRouter);

module.exports = app;