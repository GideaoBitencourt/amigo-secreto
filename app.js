let pessoas = [];

function adicionarAmigo() {
    const nomePessoas = document.getElementById("amigo").value.trim();

    if (nomePessoas !== "") {
        pessoas.push(nomePessoas);
        console.log(pessoas);
        listaDeAmigos();
        limparCampo();
    } else {
        alert("Por favor, insira um nome.");
    }
}
function limparCampo() {
    const listaPessoa = document.getElementById("amigo");
    listaPessoa.value = "";
    listaPessoa.focus();
}

function listaDeAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let index = 0; index < pessoas.length; index++) {
        const li = document.createElement("li");
        li.textContent = pessoas[index];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (pessoas.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear!");
        return;
    } else {
        const indiceAleatorio = Math.floor(Math.random() * pessoas.length);
        const amigoSorteado = pessoas[indiceAleatorio];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
    }
}

function reiniciarAmigoSecreto() {
    pessoas = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("amigo").focus();
}