const mongoose = require("mongoose");

const Filme= mongoose.model("Filme", {
    nomeFilme: String,
    duracaoFilme: Number,
    classificacaoFilme: Number,
    generoFilme: String,
    sinopseFilme: String,
});

module.exports = Filme;