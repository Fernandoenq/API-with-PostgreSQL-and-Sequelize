const Sequelize = require ("sequelize");
const database = require ("./config");//chamar a config pro BD

const sequelize = new Sequelize (database);//cria um objeto da constante sequelize que chama o database, config do BD

module.exports = sequelize;
