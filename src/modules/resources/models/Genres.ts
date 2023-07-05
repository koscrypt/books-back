import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { GenresModel } from '../types/genres'

module.exports = (sequelize: Sequelize) => {
  class Genres extends Model<GenresModel> implements GenresModel {
    id!: number
    name!: string

    static associate (models: Record<string, any>): void {
      Genres.hasMany(models.Books)
    }
  }
  Genres.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Genres',
    timestamps: false
  })
  return Genres
}
