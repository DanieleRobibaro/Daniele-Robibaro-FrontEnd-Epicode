import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  formG!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formG = this.fb.group({
      nome: '',
      alterEgo: '',
      nemico: null,
      pianeta: '',
      debolezza: this.fb.array([]),
      potere: this.fb.array([])


    })
  }
  getErrorControl(nome:string, error:string){
    if(this.formG.get(nome)?.errors == null){

    }else{
      return this.formG.get(nome)?.errors![error]

    }
  }

  getControl(nome:string){
    return this.formG.get('nome') as AbstractControl
  }

  

  // getFormArrey(nome:string){
  //   return (this.formG.get(nome) as FormArray).controls;
  // }

  addPower(){
    let fc = new FormControl(null);
    (this.formG.get('powers') as FormArray).push(fc)
  }

  submit(){
    console.log(this.formG.value)
  }

}
