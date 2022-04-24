import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { country } from "src/app/constants/country";

@Component({
  selector: 'app-reactive-nested-form-group',
  templateUrl: './reactive-nested-form-group.component.html',
  styleUrls: ['./reactive-nested-form-group.component.scss']
})
export class ReactiveNestedFormGroupComponent implements OnInit {

  signup: FormGroup;
  countries: any;

  createForm(): void {
    this.signup = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      password: new FormControl(),
      date_of_birth: new FormControl(),
      gender: new FormControl(),
      address: new FormGroup({
        first_line: new FormControl(),
        second_line: new FormControl(),
        landmark: new FormControl(),
        city: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        country: new FormControl(),
        pin_code: new FormControl()
      }),
    });
  }

  onSubmit(): void {
    console.group("Form Control Property");
    console.log("Form Group : ", this.signup);
    console.log("Form Value : ", this.signup.value);
    console.log("Form Touched : ", this.signup.touched);
    console.log("Form Controls : ", this.signup.controls);
    console.groupEnd();

    console.group("Form Control Elements ");
    console.log("Form Control first_name : ", this.signup.controls.first_name);
    console.log(
      "Form Control first_name value 1 : ",
      this.signup.controls.first_name.value
    );
    console.log(
      "Form Control first_name value 2 : ",
      this.signup.get("first_name").value
    );
    console.log(
      "Form Control first_name touched : ",
      this.signup.controls.first_name.touched
    );
    console.log(
      "Form Control first_name dirty : ",
      this.signup.controls.first_name.dirty
    );
    console.log(
      "Form Control first_name valid : ",
      this.signup.controls.first_name.valid
    );
    console.groupEnd();
    alert(JSON.stringify(this.signup.value))
  }

  constructor() {}

  ngOnInit() {
    this.createForm();
    this.countries = country;
  }
}
