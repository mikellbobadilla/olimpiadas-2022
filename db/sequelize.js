const { Sequelize } = require('sequelize')

exports.sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,{
    host: process.env.HOST,
    dialect: 'mysql'
  }
)