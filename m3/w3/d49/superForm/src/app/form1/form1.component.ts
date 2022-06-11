import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm;
 


  constructor() { }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status => {
      console.log(status, this.form)
    })
  }

  submit(){
    console.log(this.form)
  }

}
