# Users API

Essa é a API de uma aplicacao que foi desenvolvida para criar usuários, efetuar logins e listar contas criadas.

## Tecnologias Utilizadas

- *Node JS*: [https://nodejs.org/] Node JS;
- *Express*: [https://expressjs.com/] Framework para criação de servidores simples em Node JS;
- *Prisma*: [https://www.prisma.io/] ORM para conexão com o banco de dados;
- *MongoDB*: [https://www.mongodb.com/] Banco de dados NoSQL;

## A API consiste em três endpoints (duas públicas e uma privada):

**POST (pública)**
```
http://localhost:3000/register
```
- body
```
{
    "nome": "jonathan",
    "email": "jonathan@gmail.com",
    "password": "123456"
}
```

**POST (pública)**
```
http://localhost:3000/login
```
- body
```
{
    "email": "jonathan@gmail.com",
    "password": "123456"
}
```

**GET (privada)**
```
http://localhost:3000/list
```
- authorization
```
- Bearer TOKEN
```

## Para rodar a aplicação:

**Primeiro precisamos instalar os pacotes do projeto**
```
npm init -y
```

**E após executamos a API**
```
node server.js
```
