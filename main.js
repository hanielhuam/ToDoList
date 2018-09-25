'use strict'

let tarefasToDo = [];
let tarefasDoing = [];
let tarefasDone = [];

document.getElementById("addnovatarefa").addEventListener('click', adicionarNovaTarefa);


function adicionarNovaTarefa() {
    var nomeTarefa = document.getElementById('nometarefa').value;
    var descricaoTarefa = document.getElementById('descricaotarefa').value;
    var nomeEncarregado = document.getElementById('nomeencarregado').value;
    var dataConcluir = document.getElementById('dataconcluir').value;
    var task = {
        nome:nomeTarefa,
        descricao:descricaoTarefa,
        encarregado:nomeEncarregado,
        data:dataConcluir
    };
    
    var taskCard = createCard(task);
    tarefasToDo.push(taskCard);
    document.getElementById("todo").appendChild(taskCard);
}

function listItens(itens) {

    var listItens = " ";
    var i
    for(i=0; i<itens.length; i++) {
        listItens += " " + itens[i];
    }
    return listItens;
}

function createCard(task) {
    var card = document.createElement("div");
    card.className = "card";

    var list = document.createElement("ul");
    var listItenNome = document.createElement("li");
    var listItenDescricao = document.createElement("li");
    var listItenEncarregado = document.createElement("li");
    var listItenData = document.createElement("li");
    listItenNome.innerHTML = "Nome da tarefa:  " + task.nome;
    listItenDescricao.innerHTML = "Descrição:  " + task.descricao;
    listItenEncarregado.innerHTML = "Encarregado:  " + task.encarregado;
    listItenData.innerHTML = "Data:  " + task.data;
    list.appendChild(listItenNome);
    list.appendChild(listItenDescricao);
    list.appendChild(listItenEncarregado);
    list.appendChild(listItenData);

    var addButton = document.createElement("button");
    addButton.addEventListener("click", adicionar);
    addButton.value = "Adicionar";
    var deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", deletar);
    addButton.value = "Excluir";

    card.appendChild(list);
    card.appendChild(addButton);
    card.appendChild(deleteButton);

    return card;
}

function adicionar() {

}

function deletar() {
    
}