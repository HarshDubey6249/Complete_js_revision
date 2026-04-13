const todo_store = [
  {
    name: "make dinner",
    Due_date: " 2022-12-11",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = " ";

  todo_store.forEach(function (todoObject, i) {
    const { name, Due_date } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${Due_date}</div>
    <button onclick="
    todo_store.splice(${i},1);
     renderTodoList();" class="delete-todo-button">delete</button>
   
    `;

    todoListHtml += html;
  });
  //----------------------------------------------------------------------

  //for (let i = 0; i < todo_store.length; i++) {
  //console.log(todo_store[i]);
  // const todoObject = todo_store[i];
  // // const name=todoObject.name;
  // // const dueDate=todoObject.Due_date;

  // const { name, Due_date } = todoObject;
  // const html = `
  // <div>${name}</div>
  // <div>${Due_date}</div>
  // <button onclick="
  // todo_store.splice(${i},1);
  //  renderTodoList();" class="delete-todo-button">delete</button>

  // `;

  // todoListHtml += html;
  // }
  //--------------------------------------------=--------------------------------------
  // console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function Todo_function() {
  const todo_value = document.querySelector(".js-name-input");
  const todo_date = document.querySelector(".js-date-input");
  const Todo_name = todo_value.value;
  const dueDate = todo_date.value;

  todo_store.push({
    name: Todo_name,
    Due_date: dueDate,
  });
  //console.log(todo_store);
  todo_value.value = " ";
  renderTodoList();
}
