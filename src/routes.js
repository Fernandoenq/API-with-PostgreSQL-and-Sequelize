const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");


// Rotas de Planets
routes.post("/planets", PlanetController.store);

routes.get("/planets", PlanetController.index);

routes.put("/planets/:id", PlanetController.put);

routes.delete("/planets/:id", PlanetController.delete);

module.exports = routes;