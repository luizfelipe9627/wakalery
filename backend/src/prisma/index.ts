import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient(); // Está criando uma instância do prisma, ou seja, está criando um objeto do prisma que contém as funções do prisma e armazenando na constante prisma.

export default prismaClient; // Está exportando o prisma para ser usado em outros arquivos.