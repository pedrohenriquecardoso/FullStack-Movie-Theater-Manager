const express = require('express');
const Sessao = require('../models/sessao');
const router = express.Router();

router.get("/", async (req, res) => {
    await Sessao.find((err, all = []) => {
      if (err) res.send("ERRO PARA BUSCAR");
      res.json(all);
    });
  });

router.put("/:id", (req, res) => {
  console.log("ID:" + req.params.id);
  console.log("BODY:" + JSON.stringify(req.body));
  Sessao.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("ATUALIZADO COM SUCESSO"))
    .catch(() => res.send("ERRO AO ATUALIZAR"));
});
  
router.delete("/:id", (req, res) => {
  Sessao.findByIdAndDelete(req.params.id)
    .then(() => res.send("REMOVIDO COM SUCESSO"))
    .catch(() => res.send("ERRO AO REMOVER"));
});

router.post("/", (req, res) => {

  const sessao = new Sessao ({ 
      filmeSessao: req.body.filmeSessao, 
      salaSessao: req.body.salaSessao,
      audioSessao: req.body.audioSessao, 
      tipoSessao: req.body.tipoSessao,
      dataSessao: req.body.dataSessao, 
      horarioSessao: req.body.horarioSessao,
      
  });
  sessao.save().then((t) =>res.json(t))
  .catch(()=>res.send("Erro ao cadastrar"));
});

module.exports = router;
