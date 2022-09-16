const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class SalaObra extends Model { }

SalaObra.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_sala: {
    type: DataTypes.INTEGER,
    references: {
      model: 'salas',
      key: 'id'
    },
    id_obra: {
      type: DataTypes.INTEGER,
      references: {
        model: 'obras',
        key: 'id'
      }
    }
  }
}, {
  sequelize,
  modelName: 'Sala_obras',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { SalaObra }