const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  id_accesibilidad: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tipos_accesibilidades',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'users',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

module.exports = { User }