export { Login, GerenciadorCinema, Cliente, Sessao, Filme, Usuario, Reserva }

class Login {
    postLogin(tentativaLogin){
        fetch("http://localHost:3000/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tentativaLogin)
        }).then((res) => {
            if (res.ok){
              location.href = "filmes.html" 
            } else {
              alert("Não foi possivel logar")
            }
        })
    }
}

class Usuario {
    async postUsuario(objCadastrar){
        await fetch("http://localHost:3000/usuarios", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objCadastrar)
        }).then((res) => {
            if (res.ok){
              alert("Cadastrado com sucesso")
              location.href = "index.html" 
            } else {
              alert("Não foi possivel cadastrar")
            }
        })
    }
}

class GerenciadorCinema {
    
}

class Cliente {
    constructor(){
        this.clientes = {}
    }
    async getClientes(){
        await fetch("http://localHost:3000/clientes", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.clientes = json
            this.renderizarClientes(this.clientes)
        })
    }
    renderizarClientes(clientes){
        clientes.forEach((element) => {
           let divClientes = document.querySelector("#divClientes")
           divClientes.innerHTML +=  
                                `
                                <tbody>
                                    <td><img width="10" src="img/trash.png" onclick="controller.aoClicarNoIconeExcluir(${element._id})"></td>  
                                    <td><img width="10" src="img/alterar.png" onclick="controller.aoClicarNoIconeEditar(${element._id})"></td> 
                                    <td>${element.nome}</td> 
                                    <td>${element.idade}</td> 
                                    <td>${element.email}</td>                        
                                </tbody>  

                                ` 
        })
       
    }
    async postCliente(cliente){
        await fetch("http://localHost:3000/clientes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente)
        }).then((res) => {
            if (res.ok){
              alert("Cliente Cadastrado com sucesso")

            } else {
              alert("Não foi possivel cadastrar")
            }
        })
    }
}



class Sessao {
    constructor(){
        this.sessoes = {}
    }
    async getSessoes(){
        await fetch("http://localHost:3000/sessoes", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.sessoes = json
            this.renderizarSessoes(this.sessoes)
        })
    }
    renderizarSessoes(sessoes){
        let divSessoes = document.querySelector("#divSessoes")
        sessoes.forEach((element) => {
            let id = element._id
            divSessoes.innerHTML += 
                   `
                   <tbody>
                    <td><img width="20" src="img/trash.png" onclick="controller.aoClicarNoIconeExcluir(${id})"></td>  
                    <td><img width="20" src="img/alterar.png" onclick="controller.aoClicarNoIconeEditar(${id})"></td> 
                    <td>${element.filmeSessao}</td> 
                    <td>${element.salaSessao}</td> 
                    <td>${element.audioSessao}</td> 
                    <td>${element.tipoSessao}</td> 
                    <td>${element.dataSessao}</td>
                    <td>${element.horarioSessao}</td>  
                   </tbody>
                   `
        })
    }
    async getlistaFilmesSessao(){
        await fetch("http://localHost:3000/filmes", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            let filmes = json
            this.renderizarlistaFilmesSessao(filmes)
        })
    }
    renderizarlistaFilmesSessao(filmes){
        let selectFilmesSessao = document.querySelector("#selectFilmesSessao")
        filmes.forEach((element) => {
            selectFilmesSessao.innerHTML += `
                                                <option value="${element.nomeFilme}">${element.nomeFilme}</option>                                

                                            `
        })        
    }
    async postNewSessao(sessao){
        await fetch("http://localHost:3000/sessoes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sessao)
        }).then((res) => {
            if (res.ok){
              alert("Sessao Cadastrada com sucesso")

            } else {
              alert("Não foi possivel cadastrar")
            }
        })
    }
}

export default class Filme {
    constructor(){
        this.filmes = {}
    }
    async getFilmes(){
        await fetch("http://localHost:3000/filmes", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.filmes = json
            this.renderizarFilmes(this.filmes)
        })
    }
    renderizarFilmes(filmes){
        let divFilmes = document.querySelector("#divFilmes")
        filmes.forEach((element) => {
            let id = element._id
            divFilmes.innerHTML += 
                   `
                   <tbody>
                    <td><img width="20" src="img/trash.png" onclick="controller.aoClicarNoIconeExcluir(${id})"></td>  
                    <td><img width="20" src="img/alterar.png" onclick="controller.aoClicarNoIconeEditar(${id})"></td> 
                    <td>${element.nomeFilme}</td> 
                    <td>${element.duracaoFilme}</td> 
                    <td>${element.classificacaoFilme}</td> 
                    <td>${element.generoFilme}</td> 
                    <td>${element.sinopseFilme}</td> 
                   </tbody>
                   `
        })
    }
    async postNewFilme(filme){
        
        await fetch("http://localHost:3000/filmes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filme)
        }).then((res) => {
            if (res.ok){
              alert("Filme Cadastrado com sucesso")

            } else {
              alert("Não foi possivel cadastrar")
            }
        })
    }
    deleteFilme(id){
        fetch("http://localHost:3000/filmes/" + id, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
              alert("Excluido com sucesso");
              this.getVendas();
            } else {
              alert("Não foi possivel excluir");
            }
        });
    }
   
}

class Reserva{
    constructor(){
        this.reservas = {};
    }
    async getReservas(){
        await fetch("http://localHost:3000/reservas", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.reservas = json
            this.renderizarReservas(this.reservas)
        })
    }
    renderizarReservas(reservas){
        let divReservas = document.getElementById("divReservas")
        reservas.forEach((element) => {
        divReservas.innerHTML +=
                                    `
                                        <tbody>
                                            <td>${element.sessaoReserva}</td>
                                            <td>${element.clienteReserva}</td>
                                            <td>${element.cadeiraReserva}</td>
                                        </tbody>  
                                    `
        })
    }
    async postNewReserva(reserva){
        await fetch("http://localHost:3000/reservas", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reserva)
        }).then((res) => {
            if (res.ok){
              alert("Reserva Cadastrada com sucesso")

            } else {
              alert("Não foi possivel cadastrar")
            }
        })
    }
    async getClientesSelectReservas(){
        await fetch("http://localHost:3000/clientes", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.renderizarSelectClientes(json)
        })
    }
    renderizarSelectClientes(clientes){
        let selectClientes = document.querySelector("#selectClientes")
        clientes.forEach((element) => {
        selectClientes.innerHTML +=
            `<option value="${element.nome}">${element.nome}</option>`
        })
    }
    async getSessoesSelectReservas(){
        await fetch("http://localHost:3000/sessoes", {
            method: 'GET',
            
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.renderizarSelectSessoes(json)
        })
    }
    renderizarSelectSessoes(sessoes){
        let selectSessoes = document.querySelector("#selectSessoes")
        sessoes.forEach((element) => {
            selectSessoes.innerHTML +=
                    `<option value="${element.salaSessao}">${element.filmeSessao}/${element.salaSessao}</option>`
        })
    }
}



