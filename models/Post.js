const sequelize = require('../config/connection.js');
const { Sequelize, Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init(
    {
        // columns for the database
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;