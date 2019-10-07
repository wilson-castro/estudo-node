class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodos() {
    this.todos.push("Novo Todo");
    console.log(this.todos);
  }
}
//Com comentário
const MinhaList = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaList.addTodos();
};
