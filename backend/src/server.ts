import express from "express";
import { getRepository } from "typeorm";
import Orphanage from "./models/Orphanage";

import "./database/connection";

const app = express();
app.use(express.json());

// Rota: conjunto
// Recurso: usuario
// Métodos HTTP: GET, POST, PUT, DELETE
// Parametros:
// Query: enviados na propria rota ex: [..]/users?search=arthur
// Route params:  enviados da pripria rota sem nome ex: [..]/users/1 (Identificar um recurso)
// Body: corpo da requisição (enviar dados)

// CREATE ORPHANAGE
app.post("/orphanages", async (req, res) => {
  //   console.log(req.query);
  //   console.log(req.params);
  console.log(req.body);

  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);
  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  res.json({ message: "Hello World" });
});

app.listen(3333);

// Formas de acessar o banco de dados
// Driver nativo: permite executar queries do banco sem abstração
// Query builder: escrevemos as queries com a linguagem de programação
// ORM: Forma de relacionar objetos e classes com tabelas do banco de dados
// Classe que simboliza uma tabela do banco, onde cada retorno é uma instância da classe.
// tabela users = classe User
// 3 users = User User User
