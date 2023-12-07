"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Countries extends sequelize_1.Model {
        static associate(models) {
            Countries.hasMany(models.Users);
            Countries.belongsTo(models.Languages);
        }
    }
    Countries.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    }, {
        sequelize,
        modelName: 'Countries',
        timestamps: false
    });
    return Countries;
};
