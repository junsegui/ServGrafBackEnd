import { Request, Response } from "express";
import { UserServices } from "../../services/userServices";

export class usersController {
  constructor() {}
  static async createUser(req: Request, res: Response) {
    const { body } = req;
    try {
      const { address, addressNumber, email, name, lastname } = body;
      const createdUser = await UserServices.createUSer({
        address,
        addressNumber,
        email,
        name,
        lastname,
      });
      res.status(200).send({
        data: createdUser,
      });
    } catch (error: any) {
      res.status(400).send({
        error: error.message,
      });
    }
  }
  static async getUsers(req: Request, res: Response) {
    const users = await UserServices.getUsers();
    res.status(200).send({ users });
  }
}
