class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodos() {
    this.todos.push("Novo Todo");
    console.log(this.todos);
  }
}

const MinhaList = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaList.addTodos();
};
