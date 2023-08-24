"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usuarios/usersController");
const router = (0, express_1.Router)();
router.use((0, express_1.json)());
router.post("/", usersController_1.usersController.createUser);
router.get("/", usersController_1.usersController.getUsers);
exports.default = router;
