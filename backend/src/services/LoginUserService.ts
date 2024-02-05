import { PasswordAuth } from "../auth/PasswordAuth";
import { TokenAuth } from "../auth/TokenAuth";
import prismaClient from "../prisma";

// Criado uma classe chamada LoginUserService, responsável por logar um usuário.
class LoginUserService {
  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada show que recebe o parâmetro request do tipo FastifyRequest. Responsável por mostrar as informações do usuário que foi logado.
  async show({ token }: { token: string }) {
    const tokenValue = token; // Está armazenando o token passado como parâmetro na constante tokenValue.

    // Se o token não for preenchido, executa o if.
    if (!tokenValue) {
      throw new Error("Token não fornecido na requisição."); // Está retornando um erro com a mensagem "Token não fornecido na requisição."
    }

    // Acessa o banco de dados users e executa o findFirst que é responsável por encontrar o primeiro usuário que atenda a condição passada, ou seja, que tenha o token igual ao tokenValue passado como parâmetro. O await serve para esperar a função findFirst ser concluída para depois armazenar o resultado na constante user.
    const user = await prismaClient.user.findFirst({
      // O where é responsável por filtrar os dados, ou seja, só vai retornar o usuário que tiver o token igual ao tokenValue passado como parâmetro.
      where: {
        token: tokenValue,
      },
    });

    // Se o usuário não for encontrado, executa o if.
    if (!user) {
      throw new Error("Usuário não encontrado com o token fornecido."); // Está retornando um erro com a mensagem "Usuário não encontrado com o token fornecido."
    }

    return user; // Está retornando o usuário.
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada execute que recebe o parâmetro username e password do tipo IUserLogin. Responsável por logar um usuário.
  async execute({ username, password }: IUserLogin) {
    // Se o username e a senha não forem preenchidos, executa o if.
    if (!username || !password) {
      throw new Error("Preencha o campo obrigatório."); // Está retornando um erro com a mensagem "Preencha os campos obrigatórios."
    }

    // Acessa o banco de dados users e executa o findFirst que é responsável por encontrar o primeiro usuário que atenda a condição passada, ou seja, que tenha o username igual ao username passado como parâmetro. O await serve para esperar a função findFirst ser concluída para depois armazenar o resultado na constante user.
    const user = await prismaClient.user.findFirst({
      // O where é responsável por filtrar os dados, ou seja, só vai retornar o usuário que tiver o username igual ao username passado como parâmetro.
      where: {
        username,
      },
    });

    // Está criando uma instância da classe PasswordAuth, ou seja, está criando um objeto da classe PasswordAuth que contém as funções da classe PasswordAuth e armazenando na constante userAuth.
    const passwordAuth = new PasswordAuth();

    // Criado uma constante chamada passwordMatch, o compare é responsável por comparar a senha digitada com a senha criptografada do usuário no banco de dados, retornando true se estiver correta e false se estiver incorreta. O await serve para esperar a função compare ser concluída para depois armazenar o resultado na constante passwordMatch.
    const passwordMatch = await passwordAuth.compare({
      password, // Está passando a senha digitada como parâmetro.
      passwordHash: user ? user.password : "", // Está passando a senha criptografada do usuário como parâmetro.
    });

    // Se a senha estiver incorreta, ou seja for false, então executa o if, se não ele continua o código abaixo.
    if (!passwordMatch || !user) {
      throw new Error("Credenciais inválidas."); // Está retornando um erro com a mensagem "Credenciais inválidas."
    }

    const tokenAuth = new TokenAuth(); // Está criando uma instância da classe TokenAuth, ou seja, está criando um objeto da classe TokenAuth que contém as funções da classe TokenAuth e armazenando na constante tokenAuth.

    let token = user.token; // Está armazenando o token do usuário do schema do prisma na constante token.

    // Se o usuário não tiver um token, executa o if.
    if (!token) {
      token = await tokenAuth.generateToken(user.id); // Está chamando a função generateToken da classe TokenAuth, passando o id do usuário como parâmetro e em seguida armazenando na constante token. O await serve para esperar a função generateToken ser concluída para depois armazenar o resultado na constante token.

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
  }
}

export { LoginUserService }; // Está exportando a classe LoginUserService.
