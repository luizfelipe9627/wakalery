import jsonwebtoken from "jsonwebtoken"; // Está importando o jsonwebtoken, responsável por gerar o token.
import bycrypt from "bcrypt"; // Está importando o bcrypt, responsável por criptografar a senha.

// Classe chamada TokenAuth que é responsável por autenticar o usuário, verificando se o token está correto.
class TokenAuth {
  // O static não pode ser acessado por uma instância da classe(acessado por fora da classe) e sim pela própria classe, sendo assim ele não mudará de valor, sendo que o valor será o mesmo para todas as instâncias da classe.
  static jwtSecret = ""; // Criado uma variável estática chamada jwtSecret do tipo string, responsável por armazenar a chave secreta.

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada getJwtSecret que não recebe nenhum parâmetro, responsável por gerar um número aleatório criptografado para ser a chave secreta(JWT_SECRET)
  async getJwtSecret() {
    // Se a variável estática jwtSecret dentro da classe TokenAuth não estiver armazenando nada, então executa o if.
    if (!TokenAuth.jwtSecret) {
      // Está armazenando na variável estática jwtSecret o número aleatório criptografado.
      TokenAuth.jwtSecret = await bycrypt.hash(
        // Está gerando um número aleatório e criptografando ele.
        Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
        10,
      );
    }
    return TokenAuth.jwtSecret; // Está retornando a variável estática jwtSecret com o número aleatório criptografado.
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada generateToken que recebe o parâmetro userId do tipo string, responsável por gerar um token.
  async generateToken(userId: string) {
    // Está criando uma variável chamada token que armazena o token gerado pelo jsonwebtoken.sign, que recebe três parâmetros, o sub, o JWT_SECRET e o expiresIn.
    const token = jsonwebtoken.sign(
      { sub: userId }, // O sub é responsável por extrair o id do usuário que está armazenado no token.
      await this.getJwtSecret(), // Está passando o número gerado na função getJwtSecret como o JWT_SECRET, assim não é necessário armazenar a chave em um arquivo .env.
      { expiresIn: "15m" }, // Está passando o tempo de expiração do token.
    );
    return token; // Está retornando o token.
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada verifyToken que recebe o parâmetro token do tipo string, responsável por verificar se o token está correto.
  async verifyToken(token: string) {
    // Está criando um try catch, que tenta executar o código dentro do try, se der algum erro ele executa o código dentro do catch.
    try {
      // Está desestruturando o sub do token, responsável por armazenar o id do usuário. O jsonwebtoken.verify é responsável por verificar se o token está correto, recebe dois parâmetros, o token e o JWT_SECRET, que é a chave para verificar se o token está correto.
      const { sub } = jsonwebtoken.verify(
        token, // Está passando o token como parâmetro.
        await this.getJwtSecret(), // Está passando o número gerado na função getJwtSecret como o JWT_SECRET, assim não é necessário armazenar a chave em um arquivo .env.
      );
      return sub; // Está retornando a variável sub que armazena o id do usuário transformado em string.
    } catch (error) {
      return false; // Está retornando false.
    }
  }
}

export { TokenAuth }; // Está exportando a classe TokenAuth.
