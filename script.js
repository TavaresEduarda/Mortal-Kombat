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


const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸ Pausar música";
  } else {
    music.pause();
    btn.textContent = "▶️ Tocar música";
  }
});