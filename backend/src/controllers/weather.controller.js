const axios = require("axios");

const weatherController = async (req, res) => {
    try {
        const city = req.body.city;

        if (!city) {
            return res.status(400).json({
                message: "City is required"
            });
        }

        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    appid: process.env.OPENWEATHER_API_KEY,
                    units: "metric"
                }
            }
        );

        res.json({
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            windSpeed: response.data.wind.speed,
            timestamp: response.data.dt
        });

    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({
                message: "City not found"
            });
        }

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

module.exports = weatherController;