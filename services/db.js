require('dotenv').config()

const DATABASE_FILE = process.env.DATABASE_FILE;
if (!DATABASE_FILE) throw new Error("DATABASE_FILE not found");

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DBNasa.db'
  })

module.exports = sequelize;