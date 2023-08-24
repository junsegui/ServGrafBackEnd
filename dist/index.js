"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const serverConfig_1 = require("./config/serverConfig");
const { Sequelize } = require("sequelize");
exports.sequelize = new Sequelize("postgres", "postgres", "ServGraf1414", {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
});
exports.sequelize.authenticate().then((res) => {
    console.log(res);
});
const server = (0, express_1.default)();
server.listen(serverConfig_1.serverConfig.PORT, () => console.log(`Server running http://localhost:${serverConfig_1.serverConfig.PORT}`));
server.use("/users", users_routes_1.default);
