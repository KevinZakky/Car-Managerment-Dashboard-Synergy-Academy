import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Car = db.define(
  "car",
  {
    name: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Car;

// (async () => {
//   await db.sync();
// })();
