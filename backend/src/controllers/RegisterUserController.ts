import { FastifyRequest, FastifyReply } from "fastify"; // Está importando o tipo FastifyRequest responsável por definir o tipo da request/requisição e o tipo FastifyReply responsável por definir o tipo do reply/resposta.
import { RegisterUserService } from "../services/RegisterUserService"; // Está importando a classe RegisterUserService que contém as funções de registro de usuário.

/*
  O que é um controller?

  - Um controller é um arquivo que contém uma classe que é responsável por receber uma requisição e retornar uma resposta, nessse caso insere as informações no banco de dados e retorna o usuário criado.
*/

// Está criando uma classe chamada RegisterUserController, responsável por criar/registrar um usuário.
class RegisterUserController {
  // Está criando uma variável privada que contém a instância/referência da classe LoginUserService. O private serve para que a variável só possa ser acessada dentro da classe RegisterUserController.
  private registerUserService: RegisterUserService;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  constructor() {
    // Está atribuindo a variável(da classe RegisterUserController) privada registerUserService com uma nova instância(objeto que contém as funções) da classe RegisterUserService.
    this.registerUserService = new RegisterUserService();
  }

  // Está criando uma função chamada handle que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Essa função é responsável por criar um usuário. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor. O public serve para que a função possa ser acessada fora da classe RegisterUserController.
  public async handle(request: FastifyRequest, reply: FastifyReply) {
    // O try serve para tentar executar o código, se der algum erro, executa o catch.
    try {
      const { username, email, password } = request.body as IUserRegister; // Está pegando o nome e email do corpo da requisição e armazenando na constante username, email e password que são do tipo IUserRegister.

      // Criado uma constante chamada user que armazena o resultado da função execute da classe RegisterUserService, passando o username, email e password como parâmetros. O await serve para esperar a função execute ser concluída para depois armazenar o resultado na constante user.
      const user = await this.registerUserService.execute({
        username,
        email,
        password,
      });

      return reply.code(201).send([user]); // Está retornando o usuário criado para o cliente/servidor em formato JSON dentro de um array.
    } catch (error: any) {
      return reply.code(400).send({ error: error.message }); // Está retornando um erro com a mensagem de erro que foi retornada.
    }
  }
}

export { RegisterUserController }; // Está exportando a classe RegisterUserController.
