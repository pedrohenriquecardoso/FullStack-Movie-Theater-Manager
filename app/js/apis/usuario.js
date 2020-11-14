export default class Usuario {
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