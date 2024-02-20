import { FastifyRequest, FastifyReply } from "fastify"; // Está importando o tipo FastifyRequest responsável por definir o tipo da request/requisição e o tipo FastifyReply responsável por definir o tipo do reply/resposta.
import { LoginUserService } from "../services/LoginUserService"; // Está importando a classe LoginUserService que contém as funções de login de usuário.

/*
  O que é um controller?

  - Um controller é um arquivo que contém uma classe que é responsável por receber uma requisição e retornar uma resposta, nessse caso insere as informações no banco de dados e retorna o usuário criado.
*/

// Criado uma classe chamada LoginUserController, responsável por logar um usuário.
class LoginUserController {
  // Está criando uma variável privada que contém a instância/referência da classe LoginUserService. O private serve para que a variável só possa ser acessada dentro da classe LoginUserController. O private serve para que a variável só possa ser acessada dentro da classe LoginUserController.
  private loginUserService: LoginUserService;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  constructor() {
    // Está atribuindo a variável(da classe LoginUserController) privada loginUserService com uma nova instância(objeto que contém as funções) da classe LoginUserService.
    this.loginUserService = new LoginUserService();
  }

  // Criado uma função chamada handle que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Essa função é responsável por logar um usuário. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor. O public serve para que a função possa ser acessada fora da classe LoginUserService.
  public async handle(request: FastifyRequest, reply: FastifyReply) {
    // O try serve para tentar executar o código, se der algum erro, executa o catch.
    try {
      const { username, password } = request.body as IUserLogin; // Está pegando o username e a senha do corpo da requisição e armazenando na constante username e password que são do tipo IUserLogin.

      const user = await this.loginUserService.execute({ username, password }); // Criado uma constante chamada user que armazena o resultado da função execute da classe LoginUserService, passando o username e password como parâmetros. O await serve para esperar a função execute ser concluída para depois armazenar o resultado na constante user.

      return reply.code(200).send([user]); // Está retornando o usuário logado para o cliente/servidor em formato JSON dentro de um array.
    } catch (error: any) {
      return reply.code(400).send({ error: error.message }); // Está retornando um erro com a mensagem de erro que foi retornada.
    }
  }

  // Criado uma função chamada show que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Essa função é responsável por mostrar as informações do usuário que foi logado. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor. O public serve para que a função possa ser acessada fora da classe LoginUserService.
  public async show(request: FastifyRequest, reply: FastifyReply) {
    // O try serve para tentar executar o código, se der algum erro, executa o catch.
    try {
      const { token } = request.body as { token: string }; // Está pegando o token do corpo da requisição e armazenando na constante token que é do tipo string.

      const user = await this.loginUserService.show(token); // Criado uma constante chamada user que armazena o resultado da função show da classe LoginUserService, passando o token como parâmetro. O await serve para esperar a função show ser concluída para depois armazenar o resultado na constante user.

      return reply.code(200).send([user]); // Está retornando o usuário logado para o cliente/servidor em formato JSON dentro de um array.
    } catch (error: any) {
      return reply.code(400).send({ error: error.message }); // Está retornando um erro com a mensagem de erro que foi retornada.
    }
  }
}

export { LoginUserController }; // Está exportando a classe LoginUserController.
