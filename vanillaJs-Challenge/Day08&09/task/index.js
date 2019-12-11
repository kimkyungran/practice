// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".todo-form"),
    toDoinput = form.querySelector("input"),
    pending = document.querySelector(".pendingList"),
    finish = document.querySelector(".FinishedList");

const TODO_LS = "toDos";

let toDos = [];

function finishToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    if (pending.childNodes) {
        console.log(li);
        finish.appendChild(li);
        // pending.removeChild(li);
    } else if (finish > li) {
        finish.appendChild(li);
        btn.innerText = "☑";
    }

    const finishToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = finishToDos;
    saveToDos();
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    document.querySelector("ul").removeChild(li);

    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finishBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    finishBtn.innerText = "✅";
    finishBtn.addEventListener("click", finishToDo);
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finishBtn);
    li.id = newId;
    pending.appendChild(li);

    const todoObj = {
        text: text,
        id: newId
    };

    toDos.push(todoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const todoValue = toDoinput.value;
    paintToDo(todoValue);
    toDoinput.value = "";
}

function loadToDos() {
    const lodedtoDos = localStorage.getItem(TODO_LS);

    if (lodedtoDos !== null) {
        const parsedToDos = JSON.parse(lodedtoDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
    });
}
}

function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

init();
