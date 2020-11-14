const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

router.get("/", async (req, res) => {
    await Cliente.find((err, all = []) => {
      if (err) res.send("ERRO PARA BUSCAR");
      res.json(all);
    });
  });

router.put("/:id", (req, res) => {
  console.log("ID:" + req.params.id);
  console.log("BODY:" + JSON.stringify(req.body));
  Cliente.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("ATUALIZADO COM SUCESSO"))
    .catch(() => res.send("ERRO AO ATUALIZAR"));
});
  
router.delete("/:id", (req, res) => {
  Cliente.findByIdAndDelete(req.params.id)
    .then(() => res.send("REMOVIDO COM SUCESSO"))
    .catch(() => res.send("ERRO AO REMOVER"));
});

router.post("/", (req, res) => {

  const cliente = new Cliente ({ 
      nome: req.body.nome, 
      idade: req.body.idade,
      email: req.body.email, 
  });
  cliente.save().then((t) =>res.json(t))
  .catch(()=>res.send("Erro ao cadastrar"));
});

module.exports = router;
