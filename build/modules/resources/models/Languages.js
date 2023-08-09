"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Languages extends sequelize_1.Model {
        static associate(models) {
            Languages.hasMany(models.Books);
            Languages.hasMany(models.Genres);
            Languages.hasMany(models.Authors);
            Languages.hasMany(models.Countries);
        }
    }
    Languages.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Languages',
        timestamps: false
    });
    return Languages;
};
