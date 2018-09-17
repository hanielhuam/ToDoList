var menu = ["Projetos"]
console.log(listItens(menu));
document.getElementById("menus").innerHTML = listItens(menu);

function listItens(itens) {

    var listItens = "<ul>";
    
    for(i=0; i<itens.length; i++) {
        listItens += "<li>" + itens[i] + "</li>";
    }
    listItens +="</ul>";
    return listItens;
}