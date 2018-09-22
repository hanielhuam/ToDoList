'use strict'

let tarefasToDo = [];

function adicionarNovaTarefa() {
    var tarefa = document.getElementById('nome').value;
    console.log("qualquer coisa" + tarefa);
    tarefasToDo.push(tarefa);
    document.getElementById('todo').innerHTML = listItens(tarefasToDo);
}

function listItens(itens) {

    var listItens = "<ul>";
    var i
    for(i=0; i<itens.length; i++) {
        listItens += "<li>" + itens[i] + "</li>";
    }
    listItens +="</ul>";
    return listItens;
}