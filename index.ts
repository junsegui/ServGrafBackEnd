import express from "express";
import dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.routes";
import { serverConfig } from "./config/serverConfig";
const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize("postgres", "postgres", "ServGraf1414", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

sequelize.authenticate().then((res: any) => {
  console.log(res);
});

const server = express();
server.listen(serverConfig.PORT, () =>
  console.log(`Server running http://localhost:${serverConfig.PORT}`)
);

server.use("/users", usersRouter);
