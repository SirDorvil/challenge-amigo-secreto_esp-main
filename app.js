let amigos = [];

function agregarAmigo() {
      const input = document.getElementById("amigo");
    const nombre = input.value.trim();

        if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

        amigos.push(nombre);

        input.value = "";

        actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const elementoLista = document.createElement("li");
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}