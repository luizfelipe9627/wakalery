interface IUser {
  id: string;
  username: string;
  password: string;
  token: string | null;
}

interface IUserLogin {
  username: string;
  password: string;
}

interface IUserRegister {
  username: string;
  email: string;
  password: string;
  token?: string;
}
