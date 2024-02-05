interface IUserRegister {
  username: string;
  email: string;
  password: string;
}

interface IUserId {
  id: string;
}

interface IUserLogin {
  username: string;
  password: string;
}

interface IPasswordAuth {
  password: string;
  passwordHash: string;
}
