"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Genres extends sequelize_1.Model {
        static associate(models) {
            Genres.hasMany(models.Books);
            Genres.belongsTo(models.Languages);
        }
    }
    Genres.init({
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
        modelName: 'Genres',
        timestamps: false
    });
    return Genres;
};
