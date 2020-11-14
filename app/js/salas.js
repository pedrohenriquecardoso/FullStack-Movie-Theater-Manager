/* SALAS e CADEIRAS */
export default class Salas {
  constructor() {
    this.A = {
      nome: "A"
      /* cadeiras: [{ nome: "1A", ocupado: false },{ nome: "2A", ocupado: false },{ nome: "3A", ocupado: false },{ nome: "4A", ocupado: false },{ nome: "5A", ocupado: false },{ nome: "6A", ocupado: false },{ nome: "7A", ocupado: false },{ nome: "8A", ocupado: false },{ nome: "9A", ocupado: false },{ nome: "10A", ocupado: false },], */ 
    };
    this.B = {
      nome: "B"
    };
    this.C = {
      nome: "C"
    };
    this.D = {
      nome: "D"
    };
    this.E = {
      nome: "E"
    };
    this.F = {
      nome: "F"
    };
    this.reservasFeitas = [];
    this.salas = [this.A, this.B, this.C, this.D, this.E, this.F]
    this.cadeiras = [
      {nome:"1A", ocupado: false},{nome:"2A", ocupado: false},{nome:"3A", ocupado: false},{nome:"4A", ocupado: false},{nome:"5A", ocupado: false},{nome:"6A", ocupado: false},
      {nome:"1B", ocupado: false},{nome:"2B", ocupado: false},{nome:"3B", ocupado: false},{nome:"4B", ocupado: false},{nome:"5B", ocupado: false},{nome:"6B", ocupado: false},
      {nome:"1C", ocupado: false},{nome:"2C", ocupado: false},{nome:"3C", ocupado: false},{nome:"4C", ocupado: false},{nome:"5C", ocupado: false},{nome:"6C", ocupado: false},
      {nome:"1D", ocupado: false},{nome:"2D", ocupado: false},{nome:"3D", ocupado: false},{nome:"4D", ocupado: false},{nome:"5D", ocupado: false},{nome:"6D", ocupado: false},
      {nome:"1E", ocupado: false},{nome:"2E", ocupado: false},{nome:"3E", ocupado: false},{nome:"4E", ocupado: false},{nome:"5E", ocupado: false},{nome:"6E", ocupado: false},
      {nome:"1F", ocupado: false},{nome:"2F", ocupado: false},{nome:"3F", ocupado: false},{nome:"4F", ocupado: false},{nome:"5F", ocupado: false},{nome:"6F", ocupado: false}, 
     
    ]
  }
  renderizarSelectSalasEmSessoes(){
    /* this.salas.push(this.A)
    this.salas.push(this.B)
    this.salas.push(this.C)
    this.salas.push(this.D)
    this.salas.push(this.E)
    this.salas.push(this.F) */
    
    let selectSalaSessao = document.getElementById("selectSalaSessao")
    this.salas.forEach((element) => {selectSalaSessao.innerHTML += `<option value="${element.nome}">${element.nome}</option>`})
  }
  
  async getReservas() {
    let sessaoConsulta = document.getElementById("selectSessoes").value;
    if (sessaoConsulta == "Selecione") {
      alert("Escolha uma sessão");
    } else {
      await fetch("http://localHost:3000/reservas", {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          
          this.cadeiras.forEach((elementCad) => {
            divMontarCadeiras.innerHTML += `<div class="col-2  flex-fill" style="width: 50px; background-color: green;" id="${elementCad.nome}">${elementCad.nome}</div>`
            
          })
          for (let i = 0; i < json.length; i++){
            if (json[i].sessaoReserva == sessaoConsulta){
                document.getElementById(`${json[i].cadeiraReserva}`).style.backgroundColor = 'red'; 
            } 
            
          }
          
        });
    }
  }
  
}
