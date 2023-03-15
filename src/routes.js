const express = require("express");
const routes = express.Router();

const VideoController = require("./controllers/VideoController");

// routes.get("/", (request, response) => response.send("Hello World"));

routes.get("/user", VideoController.index);
routes.post("/user", VideoController.store);

routes.get("/", (req, res) => {
    res.send("deu boa");
});

module.exports = routes;
