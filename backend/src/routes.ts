// Rota: conjunto
// Recurso: usuario
// Métodos HTTP: GET, POST, PUT, DELETE
// Parametros:
// Query: enviados na propria rota ex: [..]/users?search=arthur
// Route params:  enviados da pripria rota sem nome ex: [..]/users/1 (Identificar um recurso)
// Body: corpo da requisição (enviar dados)

// MVC
// Model: Representa uma entidade
// Views: Como as coisas são visualizadas
// Controllers: Lógica das rotas

import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();

// Padrão Controller = index, show, create, update, delete
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", OrphanagesController.create);

export default routes;
