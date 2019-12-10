// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDolist = document.querySelector(".js-toDoList");

const TODOS_Ls = "toDos";


let toDos = [];
// 초반 배열 저장

function delToDo(event) {
    const btn = event.target
    const li = btn.parentNode;
    toDolist.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos
    saveToDos();
    // console.log(cleanToDos)

}
function saveToDos () {
    localStorage.setItem(TODOS_Ls , JSON.stringify(toDos)) 
    //JSON.stringify -> objects를 string 로 변경시켜준다.
}

function paintToDo(text) {
    
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", delToDo)
    span.innerText = text ;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDolist.appendChild(li);

    const toDoObj = { // arrya  생성
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos(); // push 이후 호출할 것 ! 
}

function handleSubmit(event) {
    event.preventDefault();
    const todoValue = toDoinput.value;
    paintToDo(todoValue);
    toDoinput.value = "";
}
function something(toDo) {

    
}
function loadToDos() {
    const lodedtoDos = localStorage.getItem(TODOS_Ls);

    if (lodedtoDos !== null) {
        const parsedToDos = JSON.parse(lodedtoDos);
        parsedToDos.forEach(function (toDo){// array 에 있는것들 한번씩 실행
           paintToDo(toDo.text); 
        }); 
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();