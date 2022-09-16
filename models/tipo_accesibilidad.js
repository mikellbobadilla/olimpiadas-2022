const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class TipoAccesibilidad extends Model { }

TipoAccesibilidad.init({
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
  modelName: 'tipos_accesibilidades',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { TipoAccesibilidad }