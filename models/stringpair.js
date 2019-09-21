'use strict';
module.exports = (sequelize, DataTypes) => {
  const StringPair = sequelize.define('StringPair', {
    stringA: DataTypes.STRING,
    stringB: DataTypes.STRING
  }, {});
  StringPair.associate = function(models) {
    // associations can be defined here
  };
  return StringPair;
};