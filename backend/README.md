# Documentação da API

<div display="flex">
  <img src="https://img.shields.io/static/v1?label=Node&message=20.10.0&color=green&style=for-the-badge&logo=node.js"/> 
  <img src="https://img.shields.io/static/v1?label=bcrypt&message=5.1.1&color=orange&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=fastify&message=4.25.2&color=4169E1&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=jsonwebtoken&message=9.0.2&color=black&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=prisma&message=5.8.1&color=006400&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=tsx&message=4.7.0&color=5A4FCF&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=typescript&message=5.3.3&color=3178C6&style=for-the-badge"/>
</div>

<br>

<div align="right">
  <img src="https://img.shields.io/static/v1?label=Author&message=Luiz%20Felipe%20Silva&color=blue&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=for-the-badge"/>
</div>

## Sumário

- [Introdução](#introdução)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Visão geral da API](#visão-geral-da-api)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
  - [1. Registar usuário](#1-registar-usuário)
  - [2. Logar usuário](#2-logar-usuário)
  - [3. Autenticar usuário](#3-autenticar-usuário)
  - [4. Gerar token](#4-gerar-token)

## Introdução

Bem-vindo à documentação da API de Users do Wakalery! Esta documentação fornece informações detalhadas sobre como usar a API, incluindo endpoints disponíveis, parâmetros aceitos, códigos de status e exemplos práticos. A documentação Swagger está disponível para uma visão mais interativa da API.

## Requisitos

- Node.js 14.15.1 ou superior.
- NPM 6.14.8 ou superior.

## Instalação

Para instalar e iniciar o projeto, siga os passos abaixo:

1. Clone o repositório

```bash
  git clone https://github.com/luizfelipe9627/wakalery.git
```

2. Acesse a pasta do projeto

```bash
  cd wakalery/backend
```

2. Instale as dependências

```bash
  npm install
```

3. Inicie o servidor

```bash
  npm run start
```

## Visão geral da API

A API foi projetada para ser fácil e simples de usar. Abaixo estão alguns pontos importantes para começar:

- **Base URL**: O endpoint base para todas as chamadas da API é [http://localhost:3000].
- **Autenticação**: A API não requer autenticação para acessar os endpoints. No entanto, a autenticação pode ser necessária para acessar determinados recursos.
- **Estrutura da resposta**: As respostas da API são retornadas em formato JSON. Os exemplos de resposta são fornecidos na documentação abaixo para cada endpoint.
- **Códigos de status**: A API retorna os seguintes códigos de status padrão: 200, 201, 400, 404 e 500. Códigos de status personalizados podem ser retornados em determinadas situações.

## Visão geral do Back-end

A API de Users é responsável por gerenciar os usuários do Wakalery. Ela fornece endpoints para registrar um novo usuário, logar um usuário existente, autenticar um usuário existente através do token e gerar um token único para o usuário.

## Funcionalidades

A API de Users fornece os seguintes recursos principais:

- **Registrar usuário**: Registra um novo usuário.
- **Logar usuário**: Loga um usuário existente.
- **Autenticar usuário**: Autentica um usuário existente através do token.
- **Gerar token**: Gera um token único para o usuário.
- **Senha criptografada**: Criptografa a senha do usuário.
- **Validação de dados**: Valida os dados de entrada antes de processá-los.
- **Email único**: Verifica se o email já está cadastrado.
- **Username único**: Verifica se o username já está cadastrado.
- **Tratamento de erros**: Fornece mensagens de erro claras.
- **Auto logout**: Desloga o usuário automaticamente após 15m de inatividade.

## Endpoints

### 1. Registar usuário

Registra um novo usuário.

- **Endpoint**: `/register`
- **Método**: `POST`

**Exemplo de corpo da solicitação:**

```json
{
  "username": "luiz123",
  "email": "luiz.silva@email.com",
  "password": "silva@246"
}
```

**Exemplo de resposta:**

```json
[
  {
    "id": "65c2add3029bea5a1d70b07e",
    "username": "luiz123",
    "email": "luiz.silva@email.com",
    "password": "$2b$10$tr/VJHVIwJQa7nsne6oSM.2fvknmfpe5fsLNGm1XtfYMJktYk3jea",
    "token": null
  }
]
```

### 2. Logar usuário

Loga um usuário existente.

- **Endpoint**: `/login`
- **Método**: `POST`

**Exemplo de corpo da solicitação:**

```json
{
  "username": "luiz123",
  "password": "silva@246"
}
```

**Exemplo de resposta:**

```json
[
  {
    "id": "65c2add3029bea5a1d70b07e",
    "username": "luiz123",
    "email": "luiz.silva@email.com",
    "password": "$2b$10$tr/VJHVIwJQa7nsne6oSM.2fvknmfpe5fsLNGm1XtfYMJktYk3jea",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMyYWRkMzAyOWJlYTVhMWQ3MGIwN2UiLCJpYXQiOjE3MDcyNTczMzMsImV4cCI6MTcwNzI1ODIzM30.K3DALdVpxMX1oXABnTON1jBmKrjBAf1O58pe9wp9-cM"
  }
]
```

### 3. Autenticar usuário

Autentica um usuário existente através do token.

- **Endpoint**: `/auth`
- **Método**: `POST`

**Exemplo de cabeçalho da solicitação:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMyYWRkMzAyOWJlYTVhMWQ3MGIwN2UiLCJpYXQiOjE3MDcyNTczMzMsImV4cCI6MTcwNzI1ODIzM30.K3DALdVpxMX1oXABnTON1jBmKrjBAf1O58pe9wp9-cM"
}
```

**Exemplo de resposta:**

```json
[
  {
    "id": "65c2add3029bea5a1d70b07e",
    "username": "luiz123",
    "email": "luiz.silva@email.com",
    "password": "$2b$10$tr/VJHVIwJQa7nsne6oSM.2fvknmfpe5fsLNGm1XtfYMJktYk3jea",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMyYWRkMzAyOWJlYTVhMWQ3MGIwN2UiLCJpYXQiOjE3MDcyNTczMzMsImV4cCI6MTcwNzI1ODIzM30.K3DALdVpxMX1oXABnTON1jBmKrjBAf1O58pe9wp9-cM"
  }
]
```

## Tecnologias

- **Node.js:** Ambiente de execução JavaScript server-side.
- **Fastify:** Framework web para Node.js.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática opcional ao código.
- **Prisma:** ORM para Node.js e TypeScript.
- **JWT:** Padrão aberto baseado em JSON para criar tokens de acesso.
- **BCrypt:** Biblioteca de criptografia de senhas.
- **jsonwebtoken:** Implementação de JSON Web Tokens.
- **MongoDB:** Banco de dados NoSQL.
- **tsx:** TypeScript XML.

# Autor e Licença

Este projeto foi desenvolvido por [Luiz Felipe Silva](https://github.com/luizfelipe9627), e está sob a licença MIT. Para mais informações, acesse o arquivo [LICENSE](./LICENSE).