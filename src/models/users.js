'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    remember_token: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'users',
    classMethods: {}
  }); users.associate = function (models) {
    
  }; return users;
};