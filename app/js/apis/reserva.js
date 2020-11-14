export default class Reserva{
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