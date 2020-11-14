export default class Sessao {
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
