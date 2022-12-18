const Planet = require("../models/planet")
const Satelite = require("../models/satelite")

//dizendo que a tabela Planet tem relação 1x1 com a satelite
//cada planeta tem 1 satelite
//e passa o cascata para o que acontecer en um altere no outro
Planet.hasOne(satelite, {onDelete:"CASCADE", onUpdate:"CASCADE"})

//Satelite pertence a um planeta
Satelite.belongsTo(Planet,{foreingKey:"planetId", as: "planet"})

module.exports = {Planet, Satelite}