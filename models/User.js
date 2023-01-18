const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.user_pw);
    }
}


User.init(
    {
        // columns for the database
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        user_pw: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 16],
                isAlphanumeric: true
            }
        }
    },

   { sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    },
    {hooks: {
        async beforeCreate(newUserData) {
            newUserData.user_pw = await bcrypt.hash(newUserData.user_pw, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            newUserData.user_pw = await bcrypt.hash(updatedUserData.user_pw, 10);
            return updatedUserData;
        }
  }}

);

module.exports = User;