import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { BooksModel } from '../types/books'

module.exports = (sequelize: Sequelize) => {
  class Books extends Model<BooksModel> implements BooksModel {
    id!: number
    name!: string
    isFree!: boolean
    URL!: string
    author?: string
    image?: string

    static associate (models: Record<string, any>): void {
      Books.belongsTo(models.Authors)
      Books.belongsTo(models.Countries)
      Books.belongsTo(models.Genres)
      Books.belongsTo(models.Languages)
    }
  }
  Books.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Books',
    timestamps: false
  })
  return Books
}
