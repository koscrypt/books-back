import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { AuthorsModel } from '../types/authors'

module.exports = (sequelize: Sequelize) => {
  class Author extends Model<AuthorsModel> implements AuthorsModel {
    id!: number
    name!: string

    static associate (models: Record<string, any>): void {
      Author.hasMany(models.Books)
      Author.belongsTo(models.Languages)
    }
  }
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Authors',
    timestamps: false
  })
  return Author
}
