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
exports.updateUser = exports.deleteUSer = exports.createUser = exports.getUser = exports.getUsers = void 0;
const promises_1 = require("fs/promises");
const UserModel_1 = require("./UserModel");
const DATABSE = "users.json";
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, promises_1.readFile)(DATABSE);
    return JSON.parse(data.toString());
});
exports.getUsers = getUsers;
const getUser = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, exports.getUsers)();
    return users.find((user) => user.ID == ID);
});
exports.getUser = getUser;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, exports.getUsers)();
    const newUser = new UserModel_1.User(user);
    users.push(newUser);
    yield (0, promises_1.writeFile)(DATABSE, JSON.stringify(users));
    return newUser;
});
exports.createUser = createUser;
const deleteUSer = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, exports.getUsers)();
    const newUsers = users.filter((user) => user.ID !== ID);
    yield (0, promises_1.writeFile)(DATABSE, JSON.stringify(newUsers));
    return ID;
});
exports.deleteUSer = deleteUSer;
const updateUser = (ID, user) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield (0, exports.getUser)(ID);
    const updatedUser = Object.assign(Object.assign({}, existUser), user);
    yield (0, exports.deleteUSer)(ID);
    const users = yield (0, exports.getUsers)();
    yield (0, promises_1.writeFile)(DATABSE, JSON.stringify([...users, updatedUser]));
    return updatedUser;
});
exports.updateUser = updateUser;
