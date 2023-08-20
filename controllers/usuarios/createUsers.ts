import { Request, Response } from "express";

export class usersController {
  constructor() {}
  static createUser(req: Request, res: Response) {
    const { body } = req;
    const { ID } = req.params;

    res.status(200).send({
      data: ID,
    });
  }
}
