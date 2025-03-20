
function adicionar(listaId){
    listaId = document.getElementById(listaId);
    
    if(listaId == "to-do"){
        const inputItem = listaId.createElement("input");
        inputItem.type = "text";
        inputItem.class = "input-tarefa";
        inputItem.placeholder = "Adicione uma tarefa";
    }
}

function mover(elemento, listaId){
    const proximaLista = document.getElementById(listaId);

    if(listaId == "doing"){
        elemento.setAttribute('onclick', "mover(this, 'done')");
        proximaLista.appendChild(elemento);
    }else if (listaId == "done"){
        elemento.setAttribute('onclick', "mover(this, 'to-do')");
        proximaLista.appendChild(elemento);
    } else {
        elemento.remove()
    }
}