const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.user_pw);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
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
    },{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.user_pw = await bcrypt.hash(newUserData.user_pw, 10);
            return newUserData;
        },
    },
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  });

module.exports = User;