const express = require('express');
const Filme = require('../models/filme');
const router = express.Router();

router.get("/", async (req, res) => {
    await Filme.find((err, all = []) => {
      if (err) res.send("ERRO PARA BUSCAR");
      res.json(all);
    });
  });

router.put("/:id", (req, res) => {
  console.log("ID:" + req.params.id);
  console.log("BODY:" + JSON.stringify(req.body));
  Filme.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("ATUALIZADO COM SUCESSO"))
    .catch(() => res.send("ERRO AO ATUALIZAR"));
});
  
router.delete("/:id", (req, res) => {
  Filme.findByIdAndDelete(req.params.id)
    .then(() => res.send("REMOVIDO COM SUCESSO"))
    .catch(() => res.send("ERRO AO REMOVER"));
});

router.post("/", (req, res) => {

  const filme = new Filme ({ 
      nomeFilme: req.body.nomeFilme, 
      duracaoFilme: req.body.duracaoFilme,
      classificacaoFilme: req.body.classificacaoFilme, 
      generoFilme: req.body.generoFilme,
      sinopseFilme: req.body.sinopseFilme, 
      
      
  });
  filme.save().then((t) =>res.json(t))
  .catch(()=>res.send("Erro ao cadastrar"));
});

module.exports = router;
