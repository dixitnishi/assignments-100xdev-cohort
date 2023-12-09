/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  todoList = [];
  add(todo){
    this.todoList.push(todo);
  }

  remove(index){
    this.todoList.splice(index,1);
  }

  update(index,updatedToDo){
    return index<this.todoList.length && index>=0 ? this.todoList[index] = updatedToDo:[];
  }

  get(index){
    return index<this.todoList.length && index>=0 ? this.todoList[index]:null;
  }

  getAll(){
    return this.todoList;
  }

  clear(){
    this.todoList = [];
  }


}

module.exports = Todo;
