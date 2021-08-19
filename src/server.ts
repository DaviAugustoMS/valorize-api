import express from "express";

const app = express();

/**
 *  GET    => Buscar uma Informação
 *  POST   => Inserir (Criar) uma Informação
 *  PUT    => Alterar uma Informação
 *  DELITE => Remover um dado
 *  PATCH  => Alterar uma Informação específica
 *
 *  Tipos de Parametros
 *
 *  Routes Params => http://localhost:3000/produtos/78347583448345
 *  Query Params  => http://localhost:3000/poducts?name=teclado&description=tecladobom&
 *  Query Params  => {
 *    "name": "teclado",
 *    "description": "teclado bom"
 *  }
 *  **/

app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Ola test");
});

app.listen(3000, () => console.log("Server is Running"));
