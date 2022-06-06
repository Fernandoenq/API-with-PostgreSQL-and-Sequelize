const {DataTypes} = require ("sequelize") //chamando o onjeto sequelize criado lá em sequelize.js que contem  login do BD
const sequelize = require("../config/sequelize")

const Planet = sequelize.define("planets", {//estrutura para manipular a tabela de um banco
  name: DataTypes.STRING,
  position: DataTypes.INTEGER  
})

module.exports = Planet