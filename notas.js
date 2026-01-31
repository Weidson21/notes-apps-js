// === Local  Storage ===

let notas = JSON.parse(localStorage.getItem("notas")) || [];

function salvarLocalStorage(){
    localStorage.setItem("notas", JSON.stringify(notas));
}