const express = require("express");

const weatherController = require("../controllers/weather.controller");

const router = express.Router();

router.get("/city", (req, res) => {
    const city = req.query.city;
    const country = req.query.country;

    res.json({
        message: "Weather request received",
        city: city,
        country: country,
    });
});

router.get("/:city", (req, res) => {
    const city = req.params.city;

    res.json({
        message: "City Received",
        city: city
    });
});

router.post("/", weatherController);

router.get("/", (req, res) => {
    res.json({
        message: "Weather route is working",
        status: "Success",
    });
});

module.exports = router;