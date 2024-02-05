import bcrypt from "bcrypt";

// Criado uma classe chama PasswordAuth que é responsável por autenticar o usuário, verificando se a senha está correta.
class PasswordAuth {
  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada execute que recebe o parâmetro password do tipo IUserRegister.
  async execute({ password }: { password: string }) {
    const passwordHash = await bcrypt.hash(password, 10); // Está criptografando a senha do usuário, o 10 é o número de vezes que a senha vai ser criptografada. O await serve para esperar a função hash ser concluída para depois armazenar o resultado na constante passwordHash.
    return passwordHash; // Está retornando a senha criptografada.
  }

  // Criado uma função assincrona(que só vai ser executada quando o await for concluído) chamada compare que recebe o parâmetro password e passwordHash do tipo IPasswordAuth. Essa função é responsável por comparar a senha do usuário com a senha criptografada.
  async compare({ password, passwordHash }: IPasswordAuth) {
    // Se a senha e a senha criptografada forem preenchidas ou seja true, então executa o if, se não ele continua o código abaixo.
    if (password && passwordHash) {
      const passwordMatch = await bcrypt.compare(password, passwordHash); // Está comparando a senha do usuário com a senha criptografada. O await serve para esperar a função compare ser concluída para depois armazenar o resultado na constante passwordMatch.
      return passwordMatch; // Está retornando o resultado da comparação.
    } else {
      const passwordMatch = false; // Está armazenando o valor false na constante passwordMatch.
      return passwordMatch; // Está retornando o resultado da comparação.
    }
  }
}

export { PasswordAuth }; // Está exportando a classe PasswordAuth.
