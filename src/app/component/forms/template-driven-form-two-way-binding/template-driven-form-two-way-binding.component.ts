import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven-form-two-way-binding",
  templateUrl: "./template-driven-form-two-way-binding.component.html",
  styleUrls: ["./template-driven-form-two-way-binding.component.scss"],
})
export class TemplateDrivenFormTwoWayBindingComponent implements OnInit {
  user: object = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    date_of_birth: "",
    gender: "",
    address: {
      first_line: "",
      second_line: "",
      landmark: "",
      city: "",
      district: "",
      state: "",
      country: "",
      pin_code: "",
    },
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    console.log(this.user);
  }
}
