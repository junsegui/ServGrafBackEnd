"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const __1 = require("../..");
const sequelize_1 = require("sequelize");
class usersController {
    constructor() { }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __1.sequelize.query("SELECT * FROM users", {
                type: sequelize_1.QueryTypes.SELECT,
            });
            const last_ID = response[response.length - 1].ID;
            const { body } = req;
            const { name, lastname, email, ID } = body;
            yield __1.sequelize.query(`INSERT INTO users (ID, name, lastname, email) VALUES (${ID},'${name}','${lastname}','${email}')`);
            res.status(200).send({
                user: {
                    ID: last_ID + 1,
                    name: name,
                    lastname: lastname,
                    email: email,
                },
            });
        });
    }
    static getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __1.sequelize.query("SELECT * FROM users", {
                type: sequelize_1.QueryTypes.SELECT,
            });
            res.status(200).send({ users: response });
        });
    }
}
exports.usersController = usersController;
