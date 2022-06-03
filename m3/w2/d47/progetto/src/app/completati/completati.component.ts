import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todos } from '../class/todos';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {
  doTodo!: Todos[];

  constructor(private todosService: TodosService, private router: Router) {}

  ngOnInit(): void {
    this.doTodo = this.todosService
      .getTodo()
      .filter((todo: Todos) => todo.completed);
    // let p = this.todosService.getTodo()
    // p.then(res=>{
    //   this.doTodo = res.filter((todo:Todos)=>todo.completed)
    // })
  }

  // Completato(id: number){
  //   this.doTodo =  this.todosService.updateTodo(id).filter((todo:Todos)=>todo.completed)
  //   // let p = this.todosService.updateTodo(id)
  //   // p.then(res=>{
  //   //   this.doTodo = res.filter((todo:Todos)=>todo.completed)
  //   // })
  // }
  elimina(id: number) {
    this.todosService.removeTodo(id);
    this.doTodo = this.todosService.getTodo();
    this.router.navigate(['/']);
  }
}
