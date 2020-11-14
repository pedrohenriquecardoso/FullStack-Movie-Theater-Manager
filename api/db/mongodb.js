const mongoose = require('mongoose');

module.exports = class ConnectDB {
    static conectarMongo() {
        const DB_KEY = "mongodb+srv://admin:admin@cluster0.n4wte.mongodb.net/cineHT?retryWrites=true&w=majority";
        mongoose.connect(DB_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "ERRO DE CONEXÂO: "));
        db.once("open", () => {
            console.log("CONECTADO COM MONGO");
        });
    }
}