//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema

let amigos = [];

//Recebe input do usuário contendo nomes e os adiciona à uma lista
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    if (amigo == '') {
        alert('Insira um nome válido.');
        return;

    } else {
        if (amigos.includes(amigo)) {
            alert('Este amigo já foi adicionado.');
            limparCampo();
            return;

        } else {
            amigos.push(amigo);
            console.log(amigos);

            limparCampo();
            listarAmigos();
        };
    };

}

//Exibe na tela os amigos que foram adicionados à lista
function listarAmigos() {
    //Atribui a lista HTML à uma variável
    const listaAmigos = document.getElementById('listaAmigos');
    //Limpa a lista
    listaAmigos.innerHTML = '';

    //Itera sobre a lista de amigos
    amigos.forEach(amigo => {
        //Cria elementos li para cada amigo da lista e atribui a uma variável
        let novoItem = document.createElement('li');
        //Cria um texto contendo o nome de cada amigo e atribui a uma variável
        let textoNome = document.createTextNode(amigo);

        //Coloca o texto com o nome do amigo ao li
        novoItem.appendChild(textoNome);
        //Adiciona o li com o nome de cada amigo à lista HTML
        listaAmigos.appendChild(novoItem);       
    });
}

//Limpa o campo de texto
function limparCampo () {
    const input = document.querySelector('input');
    input.value = '';
}

//Sorteia um amigo da lista e retira dela o nome sorteado
function sortearAmigo () {
    if (amigos.length === 0) {
        alert('Você não possui amigos.');

    } else {
        const numeroSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[numeroSorteado];

        //Retira da lista o amigo sorteado
        amigos.splice(numeroSorteado, 1);

        console.log(amigos);
    
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';

        let novoItem = document.createElement('li');
        let textoNome = document.createTextNode(`O amigo sorteado foi: ` + amigoSorteado);

        novoItem.appendChild(textoNome);
        listaAmigos.appendChild(novoItem);
    };
}

listarAmigos();
