
function lista(){
    let name = document.getElementById("name").value
    let power = document.getElementById("power").value
    let realm = document.getElementById("realm").value  
    let li = document.createElement("li")

    li.innerHTML = `<span>Name: ${name}</span>
    <button class="excluir" onclick="deletar(this)">Excluir</button>`
    li.innerHTML += `<p>Power: ${power}</p>`
    li.innerHTML += `<p>Realm: ${realm}</p>`
    document.getElementById("lista").appendChild(li)
    document.getElementById("name").value = ""  
    document.getElementById("power").value = ""
    document.getElementById("realm").value = "" 


    
}

function deletar(li){
    li.parentElement.remove()

}