'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Collab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Collab.belongsTo(models.User)
      Collab.belongsTo(models.Project)
    }
  }
  Collab.init(
    {
      role: DataTypes.STRING,
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Collab',
    }
  )
  return Collab
}
