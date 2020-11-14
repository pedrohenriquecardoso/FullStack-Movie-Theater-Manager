const mongoose = require("mongoose");

const Reserva = mongoose.model("Reserva", {
    sessaoReserva: String,
    clienteReserva: String,
    cadeiraReserva: String
});

module.exports = Reserva;