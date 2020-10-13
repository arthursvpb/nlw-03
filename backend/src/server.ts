import express from "express";
import "./database/connection";

import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);

// Formas de acessar o banco de dados
// Driver nativo: permite executar queries do banco sem abstração
// Query builder: escrevemos as queries com a linguagem de programação
// ORM: Forma de relacionar objetos e classes com tabelas do banco de dados
// Classe que simboliza uma tabela do banco, onde cada retorno é uma instância da classe.
// tabela users = classe User
// 3 users = User User User
