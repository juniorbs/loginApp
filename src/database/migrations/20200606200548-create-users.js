'use strict';
//quando executar a migration, irei criar a tabela, se voltar atrás, drop.
module.exports = {
  up: (queryInterface, Sequelize) => {
    //Return a promise to correctly handle asynchronicity.
      return queryInterface.createTable('users', { 
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       email: {
         type: Sequelize.STRING,
         unique: true,
         allowNull: false,
       },
       password_hash: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       created_at:{
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
       },
      });
  },

  down: (queryInterface, Sequelize) => {
    //Return a promise to correctly handle asynchronicity.

      return queryInterface.dropTable('users');
    
  }
};
