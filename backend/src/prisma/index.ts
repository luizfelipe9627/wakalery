import { PrismaClient } from "@prisma/client"; // Está importando o PrismaClient responsável por fazer a conexão com o banco de dados.

const prismaClient = new PrismaClient(); // Está criando uma instância do prisma, ou seja, está criando um objeto do prisma que contém as funções do prisma e armazenando na constante prisma.

export default prismaClient; // Está exportando o prisma para ser usado em outros arquivos.