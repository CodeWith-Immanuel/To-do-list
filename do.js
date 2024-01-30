const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("lists");
const button = document.getElementById("btn")

button.addEventListener('click', addtask)
function addtask() {
    if (inputBox.value === '') {
        alert("Please Add your Text")
    } else {
        let li = document.createElement("li")
        li.innerText = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerText = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    savedata();

}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("dataa", listContainer.innerHTML);
}
function showtext() {
    listContainer.innerHTML = localStorage.getItem("dataa");
}
showtext();