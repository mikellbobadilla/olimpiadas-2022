const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Tipo extends Model { }

Tipo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'tipos',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { Tipo }