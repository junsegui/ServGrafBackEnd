import express from "express";
import dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.routes";
import { serverConfig } from "./config/serverConfig";

const server = express();
server.listen(serverConfig.PORT, () =>
  console.log(`Server running http://localhost:${serverConfig.PORT}`)
);

server.use("/users", usersRouter);
