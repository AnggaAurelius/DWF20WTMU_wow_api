"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookUser.belongsTo(models.Book, {
        as: "book",
        foreignKey: "bookId",
      });
    }
  }
  BookUser.init(
    {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BookUser",
    }
  );
  return BookUser;
};
