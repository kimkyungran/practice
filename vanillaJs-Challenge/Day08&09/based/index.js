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
    saveToDos(); //local 삭제
    // console.log(cleanToDos)

}
function saveToDos () { // todo를 가져와서 로컬에 저장하는 역할
    localStorage.setItem(TODOS_Ls , JSON.stringify(toDos)) 
    //JSON.stringify -> objects를 string 로 변경시켜준다.
}

function paintToDo(text) {
    
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", delToDo)
    span.innerText = text ;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; // 새로운 아이디 생성
    toDolist.appendChild(li);

    const toDoObj = { // array  생성
        text: text,
        id: newId
    };

    toDos.push(toDoObj); //toDoObj 배열 안에 오브젝트 저장
    saveToDos(); // push 이후 호출할 것 ! 
}

function handleSubmit(event) {
    event.preventDefault(); // 엔터 새로고침 막기
    const todoValue = toDoinput.value; // 밸류 값 받아오기
    paintToDo(todoValue); // 밸류갑을 기반으로 생성? 
    toDoinput.value = ""; // enter 입력시 ""로 리셋
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