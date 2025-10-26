import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import { title, author, year } from "../../constants/validation.js";

const Book = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Title is required" },
      is: { args: title.value, msg: title.message },
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Author is required" },
      is: { args: author.value, msg: author.message },
    },
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "Year must be an integer" },
      min: { args: [1450], msg: year.msg },
      max: { args: [2050], msg: year.msg },
    },
  },
});

Book.sync({ alter: true });

export default Book;
