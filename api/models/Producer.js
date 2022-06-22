const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Producer = sequelize.define('producer', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuit_cuil: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cbu: { // cuenta bancaria
    type: DataTypes.INTEGER,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
  },
},{timestamps: false});

module.exports = Producer;
