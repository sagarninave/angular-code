import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactive-form-builder",
  templateUrl: "./reactive-form-builder.component.html",
  styleUrls: ["./reactive-form-builder.component.scss"],
})
export class ReactiveFormBuilderComponent implements OnInit {
  signup: FormGroup;

  createForm(): void {
    this.signup = this.FB.group({
      first_name: [""],
      last_name: [""],
      email: [""],
      mobile: [""],
      password: [""],
      date_of_birth: [""],
      gender: [""],
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
    alert(JSON.stringify(this.signup.value));
  }

  constructor(private FB: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
}
