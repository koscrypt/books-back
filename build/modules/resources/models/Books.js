"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Books extends sequelize_1.Model {
        static associate(models) {
            Books.belongsTo(models.Authors);
            Books.belongsTo(models.Countries);
            Books.belongsTo(models.Genres);
            Books.belongsTo(models.Languages);
        }
    }
    Books.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        isFree: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
        URL: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Books',
        timestamps: false
    });
    return Books;
};
