const Satelite = require("../../models/Satelite");
const Planet = require("../../models/Planet");

module.exports = {
  async store(req, res) {
    const { planetId } = req.params;
    const { name, serial_number } = req.body;

    const planet = await Planet.findByPk(planetId);//busco o planeta ja tabela planeta ja que essa chave é estrangeira

    if (!planet) {
      res.send("Esse planeta não existe!");
    }

    const satelite = await Satelite.create({ name, serial_number, planetId });

    return res.json(satelite);
  },
};