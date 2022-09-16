const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Museo extends Model { }

Museo.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  ubicacion: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  customer_name: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'museos',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { Museo }