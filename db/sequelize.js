const { Sequelize } = require('sequelize')
const { 
  database,
  host, 
  user,
  pass
} = require('../config/config')

exports.sequelize = new Sequelize(
  database,
  user,
  pass,{
    host: host,
    dialect: 'mysql'
  }
)