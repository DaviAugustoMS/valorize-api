import express from "express";

const app = express();

/**
 *  GET    => Buscar uma Informação
 *  POST   => Inserir (Criar) uma Informação
 *  PUT    => Alterar uma Informação
 *  DELITE => Remover um dado
 *  PATCH  => Alterar uma Informação específica
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
