var toDoList = [];
var doingList = [];
var doneList = [];

window.onload = function () {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var tasksLists = JSON.parse(this.responseText);
            toDoList = tasksLists.todo;
            doingList = tasksLists.doing;
            doneList = tasksLists.done;
            showTasksOnBoard();
        }
    }
    xmlHttp.open("GET", "getJson.php", true);
    xmlHttp.send();

    document.getElementById("addNewTask").addEventListener("click", addNewTask);
}

function addNewTask() {
    
    let task = taskFactory();
    addTaskToToDoList(task);
    insertTask(task);
}   

function taskFactory() {
    let nomeTarefa = document.getElementById('nometarefa').value;
    let descricaoTarefa = document.getElementById('descricaotarefa').value;
    let nomeEncarregado = document.getElementById('nomeencarregado').value;
    let dataConcluir = document.getElementById('dataconcluir').value;
    return task = {
        nome:nomeTarefa,
        descricao:descricaoTarefa,
        encarregado:nomeEncarregado,
        data:dataConcluir
    };
}

function addTaskToToDoList(task) {
    toDoList.push(task);
    newCard = createCard(task);
    document.getElementById("todo").appendChild(newCard);
}

function insertTask(task) {
    var lists = {
        todo: toDoList,
        doing: doingList,
        done: doneList
    };

    jsonLists = JSON.stringify(lists);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "getJson.php", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlHttp.send("lists=" + jsonLists);
}

function showTasksOnBoard() {
    var divs = document.getElementsByTagName("div");
    var toDoSection = divs.namedItem("todo");
    var doingSection = divs.namedItem("doing");
    var doneSection = divs.namedItem("done");

    showTasksOnSetion(toDoSection, toDoList);
    showTasksOnSetion(doingSection, doingList);
    showTasksOnSetion(doneSection, doneList);
}

function createCard(task) {
    var card = document.createElement("div");
    card.className = "w3-card w3-yellow w3-display-container";
    card.setAttribute("draggable","true");

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
    list.className = "w3-padding";

    var deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", excluir);
    deleteButton.innerHTML = "&times";
    deleteButton.className = "w3-button w3-red w3-display-topright";

    var addButton = document.createElement("button");
    addButton.addEventListener("click", adicionar);
    addButton.innerHTML = "Editar";
    addButton.className = "w3-button w3-blue w3-display-bottomright";

    card.appendChild(list);
    card.appendChild(addButton);
    card.appendChild(deleteButton);

    return card;
}

function showTasksOnSetion(section, list) {
    var i;
    for(i = 0; i < list.length; i++) {
        section.appendChild(createCard(list[i]));
    }
}

function adicionar() {

}

function excluir() {
    
}