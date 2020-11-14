const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente", {
    nome: String,
    idade: Number,
    email: String
});

module.exports = Cliente;