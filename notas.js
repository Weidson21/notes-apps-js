// Criar variávael do conteiner e botão
const containerInput = document.querySelector(".container-input")
const listaNotas = document.querySelector(".container-notas");
const header = document.querySelector("header");
const bntAdicionar = document.querySelector(".adicionar");


// === Local  Storage ===
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function salvarLocalStorage(){
    localStorage.setItem("notas", JSON.stringify(notas));
}

function criarNota(texto, categoria){

    const inputNota = document.querySelector("#titulo");
    const textarea = document.querySelector("#texto");

    const novaData = {
        id: Date.now(),
        titulo: inputNota.value.trim(),
        texto: textarea.value.trim(),
        categoria,
        criadaEm: new Date().toISOString(),
        atualizadaEm: new Date().toISOString()
    };

    notas.push(novaNota);
    salvarLocalStorage();
    renderizar();
}

function renderizar(){
    containerInput.innerHTML = "";

    notas.forEach(nota => {
        const div = document.createElement("div");
        div.classList.add("nota");

        div.innerHTML = `
        <h3>${nota.titulo}</h3>
        <p>${nota.texto}</p>
        <small>${nota.categoria}</small>`;

        containerInput.appendChild(div);
    });
}

listaNotas.style.display = "none"
bntAdicionar.addEventListener("click", () =>{
    containerInput.style.display = "none";
    listaNotas.style.display = "block"
    
    document.querySelector(".cabeçalho").innerHTML = "Editar Nota";

    const imgVoltar = document.createElement("img");
    imgVoltar.src = "imagens/seta-para-a-esquerda.png";
    imgVoltar.classList.add("voltar");

    const span = document.createElement("span");
    span.textContent = "Voltar";
    span.style.color = "White";
    span.classList.add("span");

    header.append(imgVoltar, span);
});