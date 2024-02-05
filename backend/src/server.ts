import fastify from "fastify"; // Está importando o fastify, responsável por criar o servidor.
import cors from "@fastify/cors"; // Está importando o fastify-cors, responsável por permitir o acesso de outros domínios.
import routes from "./routes/routes";

const app = fastify({ logger: true }); // Está chama a função do fastify e passa um objeto com a propriedade logger que é true, responsável por mostrar os logs(avisos) no terminal.

// Está criando um erro genérico, que é responsável por mostrar o erro no terminal.
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ error: error.message });
});

// Está criando uma função assíncrona(que só vai ser executada quando o await for concluído) chamada start, responsável por iniciar o servidor.
const start = async () => {
  await app.register(cors); // O await está esperando a função do cors ser resolvida para registrar o cors, permitindo o acesso de outros domínios.
  await app.register(routes); // O await está esperando a função do routes ser resolvida para registrar/criar as rotas.

  // O try é responsável por tentar executar o código, caso ocorra algum erro, ele entrará no catch.
  try {
    // O await está esperando a função register do fastify para registrar o cors.
    await app.listen({ port: 3000 }); // Está chamando a função listen do fastify e passando um objeto com a propriedade port que é 3000, responsável por rodar o servidor na porta 3000.
  } catch (err) {
    process.exit(1); // O process.exit(1) é responsável por fechar o servidor caso ocorra algum erro.
  }
};

start(); // Está chamando a função start, rodando o servidor.
