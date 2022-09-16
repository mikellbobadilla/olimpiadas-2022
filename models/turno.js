const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Turno extends Model { }

Turno.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_visita: {
    type: DataTypes.INTEGER,
    references: {
      model: 'visitas_guiadas',
      key: 'id'
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    aceptada: {
      type: DataTypes.STRING
    }
  }
}, {
  sequelize,
  modelName: 'turnos',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { Turno }