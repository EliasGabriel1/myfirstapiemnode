const express = require("express");
const routes = express.Router();


// buscar dados
// routes.get("/", (req, res) => {
//   return res.json({ db });
// });

//   inserir dados
routes.post("/add/:id/:nome", (req, res) => {
  const body = req.body;

  if (!body) return res.status(400).end();

  db.push(body);
  return res.json(body);
});

//  Apagar dados

routes.delete("/:id/:nome", (req, res) => {
  const id = req.params.id;
  const nome = req.params.nome;
  const db = ""
  let newDB = db.filter((item) => {
    if (!item[id,nome]) return item;
  });

  db = newDB
  return res,sebd(newDB)
});

module.exports = routes;
