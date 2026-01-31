// Criar variávael do conteiner e botão
const tarefas = document.querySelector(".container-notas");
const bntAdicionar = document.querySelector(".adicionar");

// === Local  Storage ===
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function salvarLocalStorage(){
    localStorage.setItem("notas", JSON.stringify(notas));
}
