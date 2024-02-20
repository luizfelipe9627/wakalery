import { PasswordAuth } from "../auth/PasswordAuth"; // Está importando a classe PasswordAuth responsável por fazer a criptografia e comparação de senhas.
import prismaClient from "../prisma"; // Está importando a instância do prisma que contém as funções do prisma.

/*
  O que é um service?

  - Um service é um arquivo que contém uma classe que é responsável por executar uma única tarefa, nesse caso, criar um usuário.
*/

// Criado uma classe chamada RegisterUserService, responsável por criar/register um usuário.
class RegisterUserService {
  // Está criando uma variável privada que contém a instância/referência da classe PasswordAuth. O private serve para que a variável só possa ser acessada dentro da classe RegisterUserService.
  private passwordAuth: PasswordAuth;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  constructor() {
    // Está atribuindo a variável(da classe RegisterUserService) privada passwordAuth com uma nova instância(objeto que contém as funções) da classe PasswordAuth.
    this.passwordAuth = new PasswordAuth();
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada execute que recebe o parâmetro username, email e password do tipo UserRegister.
  async execute({ username, email, password }: IUserRegister) {
    if (!username || !email || !password) {
      throw new Error("Preencha o campo obrigatório."); // Está retornando um erro com a mensagem "Preencha o campo obrigatório".
    }

    // Acessa o banco de dados users e executa o findFirst que é responsável por encontrar o primeiro usuário que atenda a condição passada, ou seja, que tenha o email igual ao email passado como parâmetro. O await serve para esperar a função findFirst ser concluída para depois armazenar o resultado na constante userAlreadyExists.
    const userAlreadyExists = await prismaClient.user.findFirst({
      // O where é responsável por filtrar os dados, ou seja, só vai retornar o usuário que tiver o email igual ao email passado como parâmetro.
      where: {
        email,
      },
    });

    // Acessa o banco de dados users e executa o findFirst que é responsável por encontrar o primeiro usuário que atenda a condição passada, ou seja, que tenha o username igual ao username passado como parâmetro. O await serve para esperar a função findFirst ser concluída para depois armazenar o resultado na constante userAlreadyExists.
    const usernameAlreadyExists = await prismaClient.user.findFirst({
      // O where é responsável por filtrar os dados, ou seja, só vai retornar o usuário que tiver o username igual ao username passado como parâmetro.
      where: {
        username,
      },
    });

    // Se o usuário já existir no banco de dados, então executa o if.
    if (userAlreadyExists) {
      throw new Error("Já existe um usuário com esse email."); // Está retornando um erro com a mensagem "Um usuário com esse email já existe".
    }

    // Se o username já existir no banco de dados, então executa o if.
    if (usernameAlreadyExists) {
      throw new Error("Já existe um usuário com esse username."); // Está retornando um erro com a mensagem "Um usuário com esse username já existe".
    }

    // Está sobrepondo a variável password com o resultado da função execute da classe PasswordAuth, passando a senha como parâmetro. O await serve para esperar a função execute ser concluída para depois armazenar o resultado na variável password.
    password = await this.passwordAuth.execute(password);

    // Está criando um usuário no banco de dados atráves do prismaClient e dentro dele pegand o schema user e executando a função create que é responsável por criar um usuário. O await serve para esperar a função create ser concluída para depois armazenar o resultado na constante user.
    const user = await prismaClient.user.create({
      // O data é responsável por passar os dados que serão inseridos no banco de dados.
      data: {
        username, // Está passando o username do usuário como parâmetro.
        email, // Está passando o email do usuário como parâmetro.
        password, // Está passando a senha criptografada do usuário como parâmetro.
      },
    });

    return user; // Está retornando o usuário criado.
  }
}

export { RegisterUserService }; // Está exportando a classe RegisterUserService.
