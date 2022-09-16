const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Sala extends Model { }

Sala.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_museo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'museos',
      key: 'id'
    }
  },
  descripcion: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'salas',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { Sala }