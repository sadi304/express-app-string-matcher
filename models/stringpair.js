'use strict';
module.exports = (sequelize, DataTypes) => {
  const StringPair = sequelize.define('StringPair', {
    strA: DataTypes.STRING,
    strB: DataTypes.STRING
  }, {});
  StringPair.associate = function(models) {
    // associations can be defined here
  };
  return StringPair;
};