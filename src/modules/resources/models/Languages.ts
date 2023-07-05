import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { LanguagesModel } from '../types/languages'

module.exports = (sequelize: Sequelize) => {
  class Languages extends Model<LanguagesModel> implements LanguagesModel {
    id!: number
    name!: string

    static associate (models: Record<string, any>): void {
      Languages.hasMany(models.Books)
    }
  }
  Languages.init({
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
    modelName: 'Languages',
    timestamps: false
  })
  return Languages
}
