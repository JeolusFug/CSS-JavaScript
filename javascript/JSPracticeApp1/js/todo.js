const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    // 만들어 둔 array를 JSON.stringify()를 사용하여 string으로 바꾸어준다.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // 클릭이 일어난 버튼의 부모요소를 찾아
    li.remove();
    // 그 부모요소를 지운다.
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // todo의 이름은 상관이 없다.
    // 리스트를 불러와서 지우고 싶은 id값을 찾아서
    // 그 아이디 값과 다르면 true, 같으면 false를 주는 함수를 작성하여
    // 리스트.filter(함수) 를 사용하면 false를 받은 항목은 없어지고
    // true를 받은 항목만 남게된다.
    // parseInt를 한 이유는 저장되어 있는 id값은 string값이기 때문에 
    // parseInt 없이 실행하면 Number !== String이 되어
    // 모든 항목에서 true가 리턴되기 때문에 형태를 맞추어 준다.
    saveToDos();
}

function paintToDo(todoObject) {
    const li = document.createElement("li");
    li.id = todoObject.id;
    // li 태그를 생성한다.
    const span = document.createElement("span");
    // span 태그를 생성한다.
    span.innerText = todoObject.text;
    // handleToDoSubmit에서 받아온 todoObject의 text를 span에 입력한다.
    const button = document.createElement("button");
    // button 태그를 생성한다.
    button.innerText = "삭제";
    button.addEventListener("click", deleteToDo);
    // button에 EventListener를 추가한다.
    li.appendChild(span);
    // 생성한 span 태그를 li의 자식요소로 넣어준다.
    li.appendChild(button);
    // 생성한 button 태그를 li의 자식요소로 넣어준다.
    todoList.appendChild(li);
    // span, button 태그가 자식요소로 들어가 있는 li 태그를 index.html의 ul 태그의 자식요소로 넣어준다.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // submit을 할 시 기본적으로 일어나는 event들을 하지 않도록 한다.
    const newTodo = todoInput.value;
    // 입력받은 input을 새로운 변수에 넣어주고,
    todoInput.value = "";
    // input 태그의 value 값을 초기화 시켜준다.
    const todoObject = {
        id : Date.now(),
        // object를 만들어 id를 입력한 시간(ms)로 주고
        text: newTodo
        // 입력값을 내용으로 준다.
    };
    todos.push(todoObject);
    // 입력받은 input 을 array에 넣어준다.
    paintToDo(todoObject);
    // function을 호출하여 태그 생성 후 화면에 보여주도록 한다.
    saveToDos();
    // 전역변수에 담겨있는 array를 그대로 string으로 바꾸기 때문에 별도로 주어야 할 변수값은 없다.
}

todoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // string으로 바꾸어 준 array를 다시 사용 할 수 있는 array로 바꾸어 준다.
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);;
}