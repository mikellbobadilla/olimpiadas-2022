const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class ObraAccesibilidad extends Model { }

ObraAccesibilidad.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_obra: {
    type: DataTypes.INTEGER,
    references: {
      model: 'obras',
      key: 'id'
    }
  },
  id_accesibilidad: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tipos_accesibilidades',
      key: 'id'
    }
  },
  accesibilidad: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'obras_accesibi',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { ObraAccesibilidad }