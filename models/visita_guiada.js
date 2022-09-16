const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class VisitaGuiada extends Model { }

VisitaGuiada.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING(200),
  },
  id_museo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'museos',
      key: 'id'
    },
    idioma: {
      type: DataTypes.STRING
    },
    horario: {
      type: DataTypes.DATE
    },
    guia: {
      type: DataTypes.STRING
    },
    capacidad: {
      type: DataTypes.INTEGER
    }
  }
}, {
  sequelize,
  modelName: 'visitas_guiadas',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { VisitaGuiada }