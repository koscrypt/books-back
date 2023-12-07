"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Author extends sequelize_1.Model {
        static associate(models) {
            Author.hasMany(models.Books);
            Author.belongsTo(models.Languages);
        }
    }
    Author.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Authors',
        timestamps: false
    });
    return Author;
};
