
function addToList() {
    let name = document.getElementById("name").value;
    let power = document.getElementById("power").value;
    let realm = document.getElementById("realm").value;
    
    let li = document.createElement("li");

    li.innerHTML = `
        <span>Name: ${name}</span>
        <button class="delete" onclick="deleteItem(this)">Delete</button>
        <p>Power: ${power}</p>
        <p>Realm: ${realm}</p>
    `;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("power").value = "";
    document.getElementById("realm").value = "";
}

function deleteItem(button) {
    button.parentElement.remove();
}