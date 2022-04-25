import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-reactive-form-group-populate-values",
  templateUrl: "./reactive-form-group-populate-values.component.html",
  styleUrls: ["./reactive-form-group-populate-values.component.scss"],
})
export class ReactiveFormGroupPopulateValuesComponent implements OnInit {
  signup: FormGroup;

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
        pin_code: new FormControl(),
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
    alert(JSON.stringify(this.signup.value));
  }

  completePopulateSetValue(): void {
    this.signup.setValue({
      first_name: "sagar",
      last_name: "ninave",
      email: "sagarninave@gmamil.com",
      mobile: "9657445206",
      password: "sagar@123",
      date_of_birth: "08/06/1996",
      gender: "male",
      address: {
        first_line: "timki rambhaji road",
        second_line: "santya square",
        landmark: "near kanalo temple",
        city: "nagpur",
        district: "nagpur",
        state: "maharashtra",
        country: "india",
        pin_code: "440018",
      },
    });
  }

  incompletePopulateSetValue(): void {
    this.signup.setValue({
      first_name: "sagar",
      last_name: "ninave",
      email: "sagarninave@gmamil.com",
      mobile: "9657445206",
      password: "sagar@123",
      date_of_birth: "08/06/1996",
      gender: "male",
      address: {
        first_line: "timki rambhaji road",
        second_line: "santya square",
        landmark: "near kanalo temple",
        city: "nagpur",
        //   district: "nagpur",
        //   state: "maharashtra",
        //   country: "india",
        //   pin_code: "440018",
      },
    });
  }

  completePopulatePatchValue(): void {
    this.signup.patchValue({
      first_name: "sagar",
      last_name: "ninave",
      email: "sagarninave@gmamil.com",
      mobile: "9657445206",
      password: "sagar@123",
      date_of_birth: "08/06/1996",
      gender: "male",
      address: {
        first_line: "timki rambhaji road",
        second_line: "santya square",
        landmark: "near kanalo temple",
        city: "nagpur",
        district: "nagpur",
        state: "maharashtra",
        country: "india",
        pin_code: "440018",
      },
    });
  }

  incompletePopulatePatchValue(): void {
    this.signup.patchValue({
      first_name: "sagar",
      last_name: "ninave",
      email: "sagarninave@gmamil.com",
      mobile: "9657445206",
      password: "sagar@123",
      date_of_birth: "08/06/1996",
      gender: "male",
      address: {
        first_line: "timki rambhaji road",
        second_line: "santya square",
        landmark: "near kanalo temple",
        city: "nagpur",
        //   district: "nagpur",
        //   state: "maharashtra",
        //   country: "india",
        //   pin_code: "440018",
      },
    });
  }
  constructor() {}

  ngOnInit() {
    this.createForm();
  }
}
