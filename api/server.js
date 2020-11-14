const express = require('express');
var cors = require('cors');
const ConnectDB = require('./db/mongodb');
ConnectDB.conectarMongo();

const alterarSenhaUser = require('./routes/alterarSenhaUser');
const cadastrar = require('./routes/cadastrar');
const clientes = require('./routes/clientes');
const filmes = require('./routes/filmes');
const login = require('./routes/login');
const recuperarSenha = require('./routes/recuperarSenha');
const reservas = require('./routes/reservas');
const sessoes = require('./routes/sessoes');
const verificarToken = require('./routes/verificarToken');
const usuarios = require('./routes/usuarios');

const app = express();
app.use(express.json());
app.use(cors())

app.use("/alterarSenhaUser", alterarSenhaUser)
app.use("/cadastrar", cadastrar)
app.use("/clientes", clientes)
app.use("/filmes", filmes)
app.use("/login", login)
app.use("/recuperarSenha", recuperarSenha)
app.use("/reservas", reservas)
app.use("/sessoes", sessoes)
app.use("/verificarToken", verificarToken)
app.use("/usuarios", usuarios)

console.log("SERVIDOR INICIALIZADO")
app.listen(3000);
