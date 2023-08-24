import { Request, Response } from "express";
import { UserServices } from "../../services/userServices";
import { sequelize } from "../..";
import { QueryTypes } from "sequelize";

export class usersController {
  constructor() {}
  static async createUser(req: Request, res: Response) {
    const response = await sequelize.query("SELECT * FROM users", {
      type: QueryTypes.SELECT,
    });
    const last_ID = response[response.length - 1].ID;
    const { body } = req;
    const { name, lastname, email, ID } = body;
    await sequelize.query(
      `INSERT INTO public.users(
        name, lastname, email, "ID")
        VALUES ('${name}', '${lastname}', '${email}', ${last_ID + 1});`
    );
    res.status(200).send({
      user: {
        ID: last_ID + 1,
        name: name,
        lastname: lastname,
        email: email,
      },
    });
  }
  static async getUsers(req: Request, res: Response) {
    const response = await sequelize.query("SELECT * FROM users", {
      type: QueryTypes.SELECT,
    });
    res.status(200).send({ users: response });
  }
}
