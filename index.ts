import express from "express";
import usersRouter from "./routes/users.routes";
const server = express();
const PORT = 3000;
server.listen(PORT, () => console.log(`Servidor levantado en ${PORT}`));
server.use("/users", usersRouter);
