const express = require("express");
const Usuario = require("../models/usuario");
const jsonwebtoken = require("../token");
const router = express.Router();
const bcrypt = require('bcryptjs'); 

router.post("/", async (req, res) => {
    let objLogins = {
        nome: req.body.nome,
        status: "failed"
    };
    try {
        let all = await Usuario.find({nome: req.body.nome});
        let mat = await bcrypt.compare(req.body.senha, all[0].senha)
        if(all.length > 0 && mat){
            var user = {
                nome: all[0].nome,
            }
            objLogins.status = "success";
            var token = jsonwebtoken.jwt.sign(user, jsonwebtoken.chavePrivada);
            user.token = token,
            res.json(user);
            
        } else {
            res.status(401).send({ error: "Usuário/Senha incorretos" });
        }
    } catch(err){
        console.log(err);
        res.send("Não foi possível buscar");
    }
});

module.exports = router;