import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signup: FormGroup;

  createForm():void{
    this.signup = new FormGroup({
      first_name:new FormControl(),
      last_name:new FormControl(),
      email:new FormControl(),
      mobile:new FormControl(),
      password:new FormControl(),
    })
  }

  onSubmit():void{
    console.log("form Value : ", this.signup.value);
  }
  
  constructor() {}

  ngOnInit() {
    this.createForm();
  }
}
