export default class Login {
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