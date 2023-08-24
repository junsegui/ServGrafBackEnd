"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor({ name, lastname, email, address, addressNumber }) {
        this.ID = (0, uuid_1.v4)();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.addressNumber = addressNumber;
    }
}
exports.User = User;
