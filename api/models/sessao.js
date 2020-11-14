const mongoose = require("mongoose");

const Sessao = mongoose.model("Sessao", {
    filmeSessao: String,
    salaSessao: String,
    audioSessao: String,
    tipoSessao: String,
    dataSessao: Date,
    horarioSessao: Number
});

module.exports = Sessao;