'use strict';
module.exports = (sequelize, DataTypes) => {
  const String = sequelize.define('String', {
    stringA: DataTypes.STRING,
    stringB: DataTypes.STRING
  }, {});
  String.associate = function(models) {
    // associations can be defined here
  };
  return String;
};