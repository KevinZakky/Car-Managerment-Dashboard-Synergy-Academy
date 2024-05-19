import { Sequelize } from "sequelize";

const db = new Sequelize("crud_cars_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
