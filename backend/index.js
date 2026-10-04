require("dotenv").config();

const http = require("http");

const app = require("./src/config/express.config");

const httpServer = http.createServer(app);

const Port = process.env.PORT || 8008;
const Host = "0.0.0.0";

httpServer.listen(Port, Host, () => {
    console.log("Server is Running in Port", Port);
    console.log("Press Ctrl + c to disconnect the server");
});