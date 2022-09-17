const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')

class Museo extends Model { }

Museo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(50), 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    id_horario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'horarios',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'museos',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = { Museo }