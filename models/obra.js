const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Obra extends Model { }

Obra.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_tipo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tipos',
      key: 'id'
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATE
    },
    id_autor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'autores',
        key: 'id'
      }
    }
  }
}, {
  sequelize,
  modelName: 'obras',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { Obra }