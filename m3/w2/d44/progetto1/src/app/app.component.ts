import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto1';
  name = 'Daniele';

  arr:{nome:string, cognome:string, id:number}[] = [];
  isVisible = false;

  utenteSelezionato:{cognome:string, nome:string, id:number}|null = null;

  ngOnInit(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => {
      this.arr = res
    })
  }

  aggiungi(){
    let n:string|null = prompt('Inserire nome')
    let c:string|null = prompt('Inserire cognome')
    if(n && c) {
      this.arr.push({
        cognome: c,
        nome: n,
        id: this.arr.length
      })
    }
  }
  dettagli(id:number){
    this.arr.forEach((e,i) => {
      if(e.id === id)
      this.utenteSelezionato = e
    })

  }
  elimina(id:number){
    let newArr:{nome:string, cognome:string, id:number}[] = []
    this.arr.forEach((e,i) => {
       if(e.id === id)
       newArr.push(e)
    })
    this.arr = newArr
  }
}