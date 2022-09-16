const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Autor extends Model { }

Autor.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  nacimiento: {
    type: DataTypes.DATE // I should that is correct
    // type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'autores',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { Autor }