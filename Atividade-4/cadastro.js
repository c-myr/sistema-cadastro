let listaDeParticipantes = ["Mayara", "Rafael", "Carla", "Roberto", "Isabel", "Ricardo"];
let numeroDeParticipantes = listaDeParticipantes.length
let idadeDoParticipante = 26


if (idadeDoParticipante < 18 && numeroDeParticipantes < 100) {
    console.log("Cadastro nâo permitido para menores de 18 anos")
} else if (idadeDoParticipante >= 18 && numeroDeParticipantes < 100) {
    console.log("Cadastro concluído com sucesso")
} else {
    console.log("Cadastro não finalizado, pois excedeu o limite de vagas")
}