// Está importando o FastifyInstance, FastifyPluginOptions, FastifyRequest e FastifyReply do fastify, responsável por criar e configurar o servidor.
import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { RegisterUserController } from "../controllers/RegisterUserController";
import { LoginUserController } from "../controllers/LoginUserController";

// Está crianco uma função assíncrona(que só vai ser executada quando o await for concluído) chamada routes, responsável por criar as rotas. Essa função recebe dois parâmetros, o fastify do tipo FastifyInstance e o options do tipo FastifyPluginOptions.
export default async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  // Está criando uma rota do tipo GET, que recebe o caminho / e uma função assíncrona(que só vai ser executada quando o await for concluído) que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    // Está retornando um objeto com a propriedade hello que é uma string.
    return { hello: "world" };
  });

  // Está criando uma rota do tipo POST responsável por criar um usuário, essa rota recebe o caminho /register e é uma função assíncrona(que só vai ser executada quando o await for concluído) que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  fastify.post(
    "/register",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new RegisterUserController().handle(request, reply); // Está retornando a função handle da classe RegisterUserController, que é responsável por criar um usuário.
    },
  );

  // Está criando uma rota do tipo POST responsável por logar um usuário, essa rota recebe o caminho /login e é uma função assíncrona(que só vai ser executada quando o await for concluído) que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginUserController().handle(request, reply); // Está retornando a função handle da classe LoginUserController, que é responsável por puxar as informações do usuário.
    },
  );

  // Está criando uma rota do tipo POST responsável por mostrar as informações do usuário que foi logado, essa rota recebe o caminho /auth e é uma função assíncrona(que só vai ser executada quando o await for concluído) que recebe o request do tipo FastifyRequest e o reply do tipo FastifyReply. Sendo que o request é o que está sendo enviado para o servidor e o reply é o que está sendo retornado pelo servidor.
  fastify.post(
    "/auth",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginUserController().show(request, reply); // Está retornando a função show da classe RegisterUserController, que é responsável por mostrar as informações do usuário.
    },
  );
}
