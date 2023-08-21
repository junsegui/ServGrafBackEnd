import { IUser } from "../database/UserModel";
import { createUser, getUsers } from "../database/database";

export class UserServices {
  constructor() {}
  static async createUSer(user: IUser) {
    const listUser = await getUsers();
    const existUser = listUser.find((_user) => user.email === _user.email);
    if (existUser) {
      throw new Error("El email no se puede repetir");
    }
    await createUser(user);
  }

  static async getUsers() {
    const users = await getUsers();
    return users;
  }
}
