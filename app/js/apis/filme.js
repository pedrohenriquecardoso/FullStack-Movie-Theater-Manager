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
