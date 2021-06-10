const Sequelize = require("sequelize");
    const database = require('./services/db');

const Fotos = database.define("fotos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Data: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Copyright: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  likes:{
      type: Sequelize.INTEGER,
  }
});

module.exports = Fotos;
