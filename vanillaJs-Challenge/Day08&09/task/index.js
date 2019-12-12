// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".todo-form"),
    input = form.querySelector("input"),
    pendingList = document.querySelector(".pendingList"),
    finishList = document.querySelector(".finishedList");

// const TODO_LS = "toDos";
const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks;


function getTaskObject(text) {
    return {
        id: String(Date.now()),
        text
    };
}
function savePendingTask(task) {
    pendingTasks.push(task);
}
function findInFinished(taskId) {
    return finishedTasks.find(function(task) {
        return task.id === taskId;
    });
}
function findInPending(taskId) {
    return pendingTasks.find(function(task) {
        return task.id === taskId;
    });
}
function removeFromPending(taskId) { 
    pendingTasks = pendingTasks.filter(function(task) {
        return task.id !==taskId;
    })
}

function removeFromFinished(taskId) {
    finishedTasks = finishedTasks.filter(function(task) {
        return task.id !== taskId;
    })
}

function addToFinished(task) {
    finishedTasks.push(task);
}
function addToPending(task) {
    pendingTasks.push(task);
}

function deleteTask (e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    removeFromFinished(li.id);
    removeFromPending(li.id);
}

function handleFinishClick(e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    const task = findInPending(li.id);
    removeFromPending(li.id);
    addToFinished(task);
    paintFinished(task);
    saveState();
}

function handleBackClick(e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    const task = findInFinished(li.id);
    removeFromFinished(li.id);
    addToPending(task);
    paintPendingTask(task);
    saveState();
}

function buildGenericLi(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = task.text;
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTask);
    li.append(span, deleteBtn);
    li.id = task.id;
    return li;
}

function paintPendingTask(task) {
    const genericLi = buildGenericLi(task);
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.addEventListener("click", handleFinishClick);
    genericLi.append(completeBtn);
    pendingList.append(genericLi);
}


function paintFinishedTask(task) {
    const genericLi = buildGenericLi(task);
    const backBtn = document.createElement("button");
    backBtn.innerText = "⏪";
    backBtn.addEventListener("click", handleBackClick);
    genericLi.append(backBtn);
    finishList.append(genericLi);
}

function saveState() {
    localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
    localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}

function loadState() {
    pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
    finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function restoreState() {
    pendingTasks.forEach(function(task) {
        paintPendingTask(task);
    });
    finishedTasks.forEach(function(task) {
        paintFinishedTask(task);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    const taskObj = getTaskObject(input.value);
    input.value = "";
    paintPendingTask(taskObj);
    savePendingTask(taskObj);
    saveState();
}

function init() {
    form.addEventListener("submit", handleFormSubmit);
    loadState();
    restoreState();
}
init();

// function finishToDo(event) {
//     const btn = event.target;
//     const li = btn.parentNode;

//     if (pending.childNodes) {
//         console.log(li);
//         finish.appendChild(li);
//         // pending.removeChild(li);
//     } else if (finish > li) {
//         finish.appendChild(li);
//         btn.innerText = "☑";
//     }

//     const finishToDos = toDos.filter(function(toDo) {
//         return toDo.id !== parseInt(li.id);
//     });

//     toDos = finishToDos;
//     saveToDos();
// }


// function deleteToDo(event) {
//     const btn = event.target;
//     const li = btn.parentNode;
//     const cleanToDos = toDos.filter(function(toDo) {
//     return toDo.id !== parseInt(li.id);
//     });

//     toDos = cleanToDos;
//     document.querySelector("ul").removeChild(li);

//     saveToDos();
// }

// function saveToDos() {
//     localStorage.setItem(TODO_LS, JSON.stringify(toDos));
// }
// function paintToDo(text) {
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     const finishBtn = document.createElement("button");
//     const span = document.createElement("span");
//     const newId = toDos.length + 1;

//     delBtn.innerText = "❌";
//     delBtn.addEventListener("click", deleteToDo);
//     finishBtn.innerText = "✅";
//     finishBtn.addEventListener("click", finishToDo);
//     span.innerText = text;

//     li.appendChild(span);
//     li.appendChild(delBtn);
//     li.appendChild(finishBtn);
//     li.id = newId;
//     pending.appendChild(li);

//     const todoObj = {
//         text: text,
//         id: newId
//     };

//     toDos.push(todoObj);
//     saveToDos();
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const todoValue = toDoinput.value;
//     paintToDo(todoValue);
//     toDoinput.value = "";
// }

// function loadToDos() {
//     const lodedtoDos = localStorage.getItem(TODO_LS);

//     if (lodedtoDos !== null) {
//         const parsedToDos = JSON.parse(lodedtoDos);
//         parsedToDos.forEach(function(toDo) {
//             paintToDo(toDo.text);
//     });
// }
// }

// function init() {
//     loadToDos();
//     form.addEventListener("submit", handleSubmit);
// }

// init();
