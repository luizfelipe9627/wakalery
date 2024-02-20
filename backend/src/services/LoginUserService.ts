import { PasswordAuth } from "../auth/PasswordAuth"; // Está importando a classe PasswordAuth responsável por fazer a criptografia e comparação de senhas.
import { TokenAuth } from "../auth/TokenAuth"; // Está importando a classe TokenAuth responsável por fazer a geração e validação de tokens.
import prismaClient from "../prisma"; // Está importando a instância do prisma que contém as funções do prisma.

/*
  O que é um service?

  - Um service é um arquivo que contém uma classe que é responsável por executar uma única tarefa, nesse caso, criar um usuário.
*/

// Criado uma classe chamada LoginUserService, responsável por logar um usuário.
class LoginUserService {
  // Está criando duas variáveis privadas que contém as instâncias/referências das classes PasswordAuth e TokenAuth. O private serve para que as variáveis só possam ser acessadas dentro da classe LoginUserService.
  private passwordAuth: PasswordAuth;
  private tokenAuth: TokenAuth;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  constructor() {
    // Está atribuindo as variáveis(da classe LoginUserService) privadas passwordAuth e tokenAuth com novas instâncias(objetos que contém as funções) das classes PasswordAuth e TokenAuth.
    this.passwordAuth = new PasswordAuth();
    this.tokenAuth = new TokenAuth();
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada show que recebe o parâmetro request do tipo FastifyRequest. Responsável por mostrar as informações do usuário que foi logado. O public serve para que a função possa ser acessada fora da classe LoginUserService.
  public async show(token: string): Promise<IUser> {
    // O try serve para tentar executar o código, se der algum erro, executa o catch.
    try {
      // Se o token não for preenchido ou seja, não for fornecido na requisição, executa o if.
      if (!token) {
        throw new Error("Token não fornecido na requisição."); // Está retornando um erro com a mensagem "Token não fornecido na requisição."
      }

      // Acessa o banco de dados users e executa o findFirst que é responsável por encontrar o primeiro usuário que atenda a condição passada, ou seja, que tenha o token igual ao token passado como parâmetro. O await serve para esperar a função findFirst ser concluída para depois armazenar o resultado na constante user.
      const user = await prismaClient.user.findFirst({
        // O where é responsável por filtrar os dados, ou seja, só vai retornar o usuário que tiver o token igual ao token passado como parâmetro.
        where: {
          token: token,
        },
      });

      // Se o usuário não for encontrado/não existir no banco de dados, executa o if.
      if (!user) {
        throw new Error("Usuário não encontrado com o token fornecido."); // Está retornando um erro com a mensagem "Usuário não encontrado com o token fornecido."
      }

      return user; // Está retornando o usuário.
    } catch (error: any) {
      // Lança um erro com a mensagem "Erro ao mostrar informações do usuário: " e a mensagem de erro que foi retornada.
      throw new Error(`${error.message}`);
    }
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada execute que recebe o parâmetro username e password do tipo IUserLogin. Responsável por logar um usuário.
  public async execute({ username, password }: IUserLogin): Promise<IUser> {
    // O try serve para tentar executar o código, se der algum erro, executa o catch.
    try {
      // Se o username e a senha não forem preenchidos, executa o if.
      if (!username || !password) {
        throw new Error("Preencha o campo obrigatório."); // Está retornando um erro com a mensagem "Preencha os campos obrigatórios."
      }

      // Acessa o banco de dados users e executa o findFirst que é responsável por encontrar o primeiro usuário que atenda a condição passada, ou seja, que tenha o username igual ao username passado como parâmetro. O await serve para esperar a função findFirst ser concluída para depois armazenar o resultado na constante user.
      const user = await prismaClient.user.findFirst({
        // O where é responsável por filtrar os dados, ou seja, só vai retornar o usuário que tiver o username igual ao username passado como parâmetro da requisição.
        where: {
          username,
        },
      });

      // Se o usuário não for encontrado/não existir no banco de dados, executa o if.
      if (!user) {
        throw new Error("Usuário não encontrado."); // Está retornando um erro com a mensagem "Usuário não encontrado."
      }

      // Criado uma constante chamada passwordMatch, que acessa a classe PasswordAuth e executa a função compare que é responsável por comparar a senha digitada com a senha criptografada do usuário. O await serve para esperar a função compare ser concluída para depois armazenar o resultado na constante passwordMatch.
      const passwordMatch = await this.passwordAuth.compare({
        password, // Está passando a senha digitada como parâmetro.
        passwordHash: user.password, // Está passando a senha criptografada do usuário como parâmetro.
      });

      // Se a senha estiver incorreta, ou seja for false, então executa o if, se não ele continua o código abaixo.
      if (!passwordMatch || !user) {
        throw new Error("Credenciais inválidas."); // Está retornando um erro com a mensagem "Credenciais inválidas."
      }

      let token = user.token; // Está armazenando o token do usuário do schema do prisma na constante token.

      // Se o usuário não tiver um token, executa o if.
      if (!token) {
        token = await this.tokenAuth.generateToken(user.id); // Está executando a função generateToken que é responsável por gerar um token conforme o id do usuário. O await serve para esperar a função generateToken ser concluída para depois armazenar o resultado na constante token.

        // Atualiza atualiza o token do usuário no banco de dados.
        await prismaClient.user.update({
          // O where é responsável por filtrar os dados, ou seja, só vai atualizar o usuário que tiver o id igual ao id do usuário.
          where: {
            id: user.id,
          },
          // O data é responsável por atualizar os dados, ou seja, só vai atualizar o token do usuário.
          data: {
            token,
          },
        });

        user.token = token; // Está pegando o token gerado e armazenando no campo token do usuário, que está armazenado na constante user.
      }

      return user; // Está retornando o usuário.
    } catch (error: any) {
      // Lança um erro com a mensagem "Erro ao logar usuário: " e a mensagem de erro que foi retornada.
      throw new Error(`${error.message}`);
    }
  }
}

export { LoginUserService }; // Está exportando a classe LoginUserService.
