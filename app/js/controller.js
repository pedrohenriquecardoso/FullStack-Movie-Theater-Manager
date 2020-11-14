import  Login from "./apis/login.js";
import  GerenciadorCinema from "./apis/gerenciadorCinema.js";
import  Cliente from "./apis/cliente.js";
import  Sessao from "./apis/sessao.js";
import  Filme from "./apis/filme.js";
import  Usuario from "./apis/usuario.js";
import  Reserva from "./apis/reserva.js";
 

export default class Controller {
  constructor() {
    this.gerenciadorCinema = new GerenciadorCinema();
    this.cliente = new Cliente();
    this.sessao = new Sessao();
    this.filme = new Filme();
    this.usuario = new Usuario();
    this.login = new Login();
    this.reserva = new Reserva()
  }
  /* Login e Cadastro */
  aoClicarLogin() {
    let nomeUsuarioEntrar = document.getElementById("nomeUsuarioEntrar").value;
    let senhaUsuarioEntrar = document.getElementById("senhaUsuarioEntrar")
      .value;
    let tentativaLogin = { nome: nomeUsuarioEntrar, senha: senhaUsuarioEntrar };
    this.login.postLogin(tentativaLogin);
  }
  aoClicarlogout() {
    location.href = "index.html";
  }
  aoClicarCadastrar() {
    let nomeCadastrar = document.getElementById("nomeCadastrar").value;
    let senhaCadastrar = document.getElementById("senhaCadastrar").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    if (confirmarSenha == senhaCadastrar) {
      let objCadastrarUsuario = { nome: nomeCadastrar, senha: senhaCadastrar };
      this.usuario.postUsuario(objCadastrarUsuario);
    } else {
      alert("Erro ao confirmar senha");
    }
  }
  /* Filme */
  domListaFilmes(){
    this.filme.getFilmes()
  }
  aoClicarAddFilme() {
    let nomeFilme = document.getElementById("nomeFilme").value;
    let duracaoFilme = document.getElementById("duracaoFilme").value;
    let classificacaoFilme = document.getElementById("classificacaoFilme").value;
    let generoFilme = document.getElementById("generoFilme").value;
    let sinopseFilme = document.getElementById("sinopseFilme").value;
    let filme = {
      nomeFilme: nomeFilme,
      duracaoFilme: duracaoFilme,
      classificacaoFilme: classificacaoFilme,
      generoFilme: generoFilme,
      sinopseFilme: sinopseFilme,
    };

    this.filme.postNewFilme(filme)
  } 
  aoClicarNoIconeExcluir(id){
    console.log(id)
    this.filme.deleteFilme(id)
  }
  aoClicarNoIconeEditar(id){
    alert(id)
  }
  /* limparFormFilmes() {
    document.getElementById("nomeFilme").value = "";
    document.getElementById("duracaoFilme").value = "";
    document.getElementById("classificacaoFilme").value = "";
    document.getElementById("generoFilme").value = "";
    document.getElementById("sinopseFilme").value = "";
    document.getElementById("textoBusca").value = "";
  } */
  /* buscarFilmePorNome(busca) {
    let filtro = arrFilmes.filter(function (f) {
      if (f.nome.toUpperCase() == busca.toUpperCase()) {
        return f;
      }
    });
    return filtro;
  }
  buscarFilmePorGenero(busca) {
    let filtro = arrFilmes.filter(function (f) {
      if (f.genero.toUpperCase() == busca.toUpperCase()) {
        return f;
      }
    });
    return filtro;
  } */

  /* CLIENTES */
  domListaClientes(){
    this.cliente.getClientes()
  }

  aoClicarAddCliente(){
        let nomeCliente = document.getElementById("nomeCliente").value
        let idadeCliente = document.getElementById("idadeCliente").value
        let emailCliente = document.getElementById("emailCliente").value
        let cliente = {nome: nomeCliente, idade: idadeCliente, email: emailCliente}
        this.cliente.postCliente(cliente)
  }  

  /* SESSOES */
  domListaSessoes(){
    this.sessao.getSessoes()
  }
  domListaFilmesSesoes(){
    this.sessao.getlistaFilmesSessao()
  }
  aoCLicarAddSessao(){
    let filmeSessao = document.getElementById("selectFilmesSessao").value
    let salaSessao = document.getElementById("selectSalaSessao").value
    let audioSessao = document.getElementById("selectAudioSessao").value
    let tipoSessao = document.getElementById("selectTipoSessao").value
    let dataSessao = document.getElementById("inputDataSessao").value
    let horarioSessao = document.getElementById("inputHorarioSessao").value
    let sessao = {filmeSessao: filmeSessao, salaSessao: salaSessao, audioSessao: audioSessao, tipoSessao: tipoSessao, dataSessao: dataSessao, horarioSessao: horarioSessao}
    this.sessao.postNewSessao(sessao)
  }   

/* RESERVAS */
  domArrReservas(){
    this.reserva.getReservas()
  }
  aoClicarSalvarReserva() {
    let sessaoReserva = document.getElementById("selectSessoes").value
    let clienteReserva = document.getElementById("selectClientes").value
    let cadeiraReserva = document.getElementById("inputCadeira").value
    let reserva = { sessaoReserva: sessaoReserva, clienteReserva: clienteReserva, cadeiraReserva: cadeiraReserva }
    this.reserva.postNewReserva(reserva) 
  }
  selectListaDeClientesEmReservas() {
    this.reserva.getClientesSelectReservas()
  }   
  selectListaDeSessoesEmReservas() {
      this.reserva.getSessoesSelectReservas()
  }  
}
