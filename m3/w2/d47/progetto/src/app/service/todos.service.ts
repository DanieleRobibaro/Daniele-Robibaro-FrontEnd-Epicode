import { Injectable } from '@angular/core';
import { Todos } from '../class/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  todos: Todos[] = [];

  addTodo(todo: Todos) {
    this.todos.push(todo);
    for (let i = 0; i < this.todos.length; i++) {
      todo.id = i + 1;
    }
  }
  // addTodo(todo: Todos): Promise<Todos[]> {
  //     return new Promise((res, rej) => {
  //       setTimeout(() => {
  //         this.todos.push(todo);
  //           for (let i = 0; i < this.todos.length; i++){
  //             todo.id = i+1
  //           }
  //       }, 2000);
  //     });
  //   }

  getTodo() {
    return this.todos;
  }
  // getTodo(): Promise<Todos[]> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //        res(this.todos)
  //     }, 2000);
  //   });
  // }

  updateTodo(id: number) {
    return (this.todos = this.todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    ));
  }
  // updateTodo(id: number): Promise<Todos[]> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //        this.todos = this.todos.map(todo => todo.id==id ?{...todo, completed: !todo.completed}:todo)
  //        res(this.todos)
  //     }, 2000);
  //   });
  // }

  removeTodo(id: number) {
    return (this.todos = this.todos.filter((todo) => todo.id != id));
  }
}
