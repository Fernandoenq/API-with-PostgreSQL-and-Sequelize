'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {//tudo que colocar aqui voce ira criar / inserir (subir no banco de dados)
 
    //criando a tabela planets do tipo...
    await queryInterface.createTable("planets", {
      id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
      },
      name:{
      type: Sequelize.STRING,//VARCHAR
      allowNull:false,
      },
      position:{
      type: Sequelize.INTEGER,
      allowNull:false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });   
  },

  down: async (queryInterface, Sequelize) => {//tudo que colocar aqui é excluir / desfazer
    await queryInterface.dropTable("planets");
  }
};
