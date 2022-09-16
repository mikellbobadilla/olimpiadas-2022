const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class PlanoMuseo extends Model { }

PlanoMuseo.init({
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
  plano: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'plano_museos',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { PlanoMuseo } 
