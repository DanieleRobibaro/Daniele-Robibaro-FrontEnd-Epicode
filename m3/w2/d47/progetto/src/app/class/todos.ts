import { Todo } from '../interface/todo';

export class Todos implements Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.id = 0;
    this.title = title;
    this.completed = false;
  }
}
