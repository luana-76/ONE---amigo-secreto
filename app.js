//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let inputText= document.querySelector('#amigo');//tag do input
let lista = document.querySelector('#listaAmigos');//tag da lista
let resultado = document.querySelector('#resultado');//tag de resultado
let amigosAdicionados = [];//Lista que pegará os amigos

function adicionarAmigo(){

    //Adicionando na lista
    if(inputText.value != ''){

        amigosAdicionados.push(inputText.value);

    }else{

        alert('Por favor, insira um nome válido.');

    }

    //Renderizando a lista
    lista.innerHTML = amigosAdicionados.map(amigo => `<li>${amigo}</li>`).join('');
    
}

function sortearAmigo(){

    //Pegando um indice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigosAdicionados.length);

    //Renderizando o resultado
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigosAdicionados[indiceAleatorio]}`;

}


