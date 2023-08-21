import { readFile, writeFile } from "fs/promises";
import { IUser, User } from "./UserModel";
import { v4 } from "uuid";
const DATABSE = "users.json";

export const getUsers = async (): Promise<User[]> => {
  const data = await readFile(DATABSE);
  return JSON.parse(data.toString());
};
export const getUser = async (ID: String) => {
  const users = await getUsers();
  return users.find((user) => user.ID == ID);
};
export const createUser = async (user: IUser) => {
  const users = await getUsers();
  const newUser = new User(user);
  users.push(newUser);
  await writeFile(DATABSE, JSON.stringify(users));
  return newUser;
};
export const deleteUSer = async (ID: String) => {
  const users = await getUsers();
  const newUsers = users.filter((user) => user.ID !== ID);
  await writeFile(DATABSE, JSON.stringify(newUsers));
  return ID;
};
export const updateUser = async (ID: String, user: IUser) => {
  const existUser = await getUser(ID);
  const updatedUser = {
    ...existUser,
    ...user,
  };
  await deleteUSer(ID);
  const users = await getUsers();
  await writeFile(DATABSE, JSON.stringify([...users, updatedUser]));
  return updatedUser;
};
