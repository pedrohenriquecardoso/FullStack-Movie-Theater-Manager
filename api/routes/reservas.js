const express = require('express');
const Reserva = require('../models/reserva');
const router = express.Router();

router.get("/", async (req, res) => {
    await Reserva.find((err, all = []) => {
      if (err) res.send("ERRO PARA BUSCAR");
      res.json(all);
    });
  });

router.put("/:id", (req, res) => {
  console.log("ID:" + req.params.id);
  console.log("BODY:" + JSON.stringify(req.body));
  Reserva.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("ATUALIZADO COM SUCESSO"))
    .catch(() => res.send("ERRO AO ATUALIZAR"));
});
  
router.delete("/:id", (req, res) => {
  Reserva.findByIdAndDelete(req.params.id)
    .then(() => res.send("REMOVIDO COM SUCESSO"))
    .catch(() => res.send("ERRO AO REMOVER"));
});

router.post("/", (req, res) => {

  const reserva = new Reserva ({ 
      sessaoReserva: req.body.sessaoReserva, 
      clienteReserva: req.body.clienteReserva,
      cadeiraReserva: req.body.cadeiraReserva, 
  });
  reserva.save().then((t) =>res.json(t))
  .catch(()=>res.send("Erro ao cadastrar"));
});

module.exports = router;
