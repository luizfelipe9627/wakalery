import { FastifyRequest, FastifyReply } from "fastify";
import { RegisterUserService } from "../services/RegisterUserService";
import { PasswordAuth } from "../auth/PasswordAuth";

/*
  O que é um controller?

  - Um controller é um arquivo que contém uma classe que é responsável por receber uma requisição e retornar uma resposta, nessse caso insere as informações no banco de dados e retorna o usuário criado.
*/

// Está criando uma classe chamada RegisterUserController, responsável por criar/registrar um usuário.
class RegisterUserController {
  // Está criando uma função chamada handle que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Essa função é responsável por criar um usuário. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { username, email } = request.body as IUserRegister; // Está pegando o nome e email do corpo da requisição e armazenando na constante username, email e password que são do tipo IUserRegister.
    let { password } = request.body as IPasswordAuth; // Está pegando a senha do corpo da requisição e armazenando na constante password que é do tipo IPasswordAuth.

    const userService = new RegisterUserService(); // Está criando uma instância da classe RegisterUserService, ou seja, está criando um objeto da classe RegisterUserService que contém as funções da classe RegisterUserService e armazenando na constante userService.

    const user = await userService.execute({ username, email, password }); // Está executando a função execute da classe RegisterUserService e armazenando na constante user. O await serve para esperar a função execute ser concluída para depois armazenar o resultado na constante user.

    return reply.code(201).send([user]); // Está retornando o usuário criado para o cliente/servidor em formato JSON dentro de um array.
  }
}

export { RegisterUserController }; // Está exportando a classe RegisterUserController.
