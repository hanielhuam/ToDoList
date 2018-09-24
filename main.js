'use strict'

let tarefasToDo = [];
let tarefasDoing = [];
let tarefasDone = [];

document.getElementById("addnovatarefa").addEventListener('click', adicionarNovaTarefa);

var createNewTaskCard = function(TaskName) {
    
}

function adicionarNovaTarefa() {
    var tarefa = document.getElementById('nome').value;
    tarefasToDo.push(tarefa);
    var taskList = document.getElementById('todo').lastElementChild;
    taskList.innerHTML = listItens(tarefasToDo);
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