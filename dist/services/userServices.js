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
exports.UserServices = void 0;
const database_1 = require("../database/database");
class UserServices {
    constructor() { }
    static createUSer(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUser = yield (0, database_1.getUsers)();
            const existUser = listUser.find((_user) => user.email === _user.email);
            if (existUser) {
                throw new Error("El email no se puede repetir");
            }
            yield (0, database_1.createUser)(user);
        });
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, database_1.getUsers)();
            return users;
        });
    }
}
exports.UserServices = UserServices;
