const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/sequelize");

class Horario extends Model {}

Horario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    desde: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    hasta: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "horarios",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = { Horario };