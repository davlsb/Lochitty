'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
    },
  },
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
    },
    latitude: {
      type: DataTypes.DECIMAL(9,6),
      validate: {
        min: -90,
        max: 90,
        notEmpty: true,
      }
    },
    longitude: {
      type: DataTypes.DECIMAL(9,6),
      validate: {
        min: -180,
        max: 180,
        notEmpty: true,
      }
    },
    zip: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
      }
    },
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};