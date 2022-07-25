'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.Issue, { onDelete: 'cascade' })
      Project.belongsTo(models.User)
      Project.belongsToMany(models.User, { through: models.Collab })
      Project.hasMany(models.Collab, { onDelete: 'cascade' })
      Project.hasMany(models.Collab, { as: 'members' })
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Project',
    }
  )
  return Project
}
