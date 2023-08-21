import { Request, Response, Router, json } from "express";
import { usersController } from "../controllers/usuarios/usersController";

const router = Router();
router.use(json());
router.post("/", usersController.createUser);
router.get("/", usersController.getUsers);

export default router;
