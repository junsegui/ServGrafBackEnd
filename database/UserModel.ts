import { v4 } from "uuid";

export class User {
  ID: String;
  name: String;
  lastname: String;
  email: String;
  address: String;
  addressNumber: String;

  constructor({ name, lastname, email, address, addressNumber }: IUser) {
    this.ID = v4();
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.address = address;
    this.addressNumber = addressNumber;
  }
}
export interface IUser {
  name: String;
  lastname: String;
  email: String;
  address: String;
  addressNumber: String;
}
