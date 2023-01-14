const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Comment extends Model {}

Comment.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
           len: [5, 120],
           isAlphanumeric: true,
        },
        
    
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
    
    }
);

module.exports = Comment;