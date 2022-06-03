import { Component, Input, OnInit } from '@angular/core';
import { Todos } from '../class/todos';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos!: Todos[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService
      .getTodo()
      .filter((todo: Todos) => !todo.completed);
    // let p = this.todosService.getTodo()
    //   p.then(res=>{
    //     this.todos = res.filter((todo:Todos)=>!todo.completed)
    //   })
  }

  title: string = '';

  add() {
    if (this.title != '') {
      let newTodo = new Todos(this.title);
      this.todosService.addTodo(newTodo);
      this.todos = this.todosService
        .getTodo()
        .filter((todo: Todos) => !todo.completed);
      this.title = '';
    } else {
      alert('compila il form');
    }
    // if(this.title!=''){
    //   let newTodo = new Todos(this.title);
    //   this.todosService.addTodo(newTodo);
    //   let p = this.todosService.getTodo()
    //   p.then(res=>{
    //     this.todos = res.filter((todo:Todos)=>!todo.completed)
    //   })
    //   this.title = ''
    // }else{
    //   alert('compila il form')
    // }
  }

  Completato(id: number) {
    this.todos = this.todosService
      .updateTodo(id)
      .filter((todo: Todos) => !todo.completed);
    // let p = this.todosService.updateTodo(id)
    // p.then(res=>{
    //   this.todos = res.filter((todo:Todos)=>todo.completed)
    // })
  }
}
