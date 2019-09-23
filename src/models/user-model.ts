export class UserModel {
  email: string;
  password: string;
  uid: string;
  token: string;

  constructor(
    email?: string,
    password?: string,
    uid?: string,
    token?: boolean
  ) { }
}
