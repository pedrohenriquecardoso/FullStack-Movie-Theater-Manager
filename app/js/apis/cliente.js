export default class Cliente {
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