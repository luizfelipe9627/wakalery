import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserService } from "../services/LoginUserService";

/*
  O que é um controller?

  - Um controller é um arquivo que contém uma classe que é responsável por receber uma requisição e retornar uma resposta, nessse caso insere as informações no banco de dados e retorna o usuário criado.
*/

// Criado uma classe chamada LoginUserController, responsável por logar um usuário.
class LoginUserController {
  // Criado uma função chamada handle que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Essa função é responsável por logar um usuário. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { username, password } = request.body as IUserLogin; // Está pegando o username e a senha do corpo da requisição e armazenando na constante username e password que são do tipo IUserLogin.

    const loginUserService = new LoginUserService(); // Está criando uma instância da classe LoginUserService, ou seja, está criando um objeto da classe LoginUserService que contém as funções da classe LoginUserService e armazenando na constante loginUserService.

    const user = await loginUserService.execute({ username, password }); // Está executando a função execute da classe LoginUserService, passando o username e password como parâmetro e em seguida armazenando na constante user. O await serve para esperar a função execute ser concluída para depois armazenar o resultado na constante user.

    return reply.code(200).send([user]); // Está retornando o usuário logado para o cliente/servidor em formato JSON dentro de um array.
  }

  // Criado uma função chamada show que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Essa função é responsável por mostrar as informações do usuário que foi logado. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  async show(request: FastifyRequest, reply: FastifyReply) {
    const { token } = request.body as { token: string }; // Está pegando o token do corpo da requisição e armazenando na constante token que é do tipo string.

    const loginUserService = new LoginUserService(); // Está criando uma instância da classe LoginUserService, ou seja, está criando um objeto da classe LoginUserService que contém as funções da classe LoginUserService e armazenando na constante loginUserService.

    const user = await loginUserService.show({ token }); // Está executando a função show da classe LoginUserService, passando o token como parâmetro e em seguida armazenando na constante user. O await serve para esperar a função show ser concluída para depois armazenar o resultado na constante user.

    return reply.code(200).send([user]); // Está retornando o usuário logado para o cliente/servidor em formato JSON dentro de um array.
  }
}

export { LoginUserController }; // Está exportando a classe LoginUserController.
