import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-two-way-binding-validation',
  templateUrl: './template-driven-form-two-way-binding-validation.component.html',
  styleUrls: ['./template-driven-form-two-way-binding-validation.component.scss']
})
export class TemplateDrivenFormTwoWayBindingValidationComponent implements OnInit {
  user:object ={
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    password:"",
    date_of_birth:"",
    gender:"",
  } 

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.user);
  }
}
