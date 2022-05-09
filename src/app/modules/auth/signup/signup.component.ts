import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private FB: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.signupForm = this.FB.group({
      first_name: [
        "",
        [Validators.required, Validators.maxLength, Validators.minLength],
      ],
      last_name: [
        "",
        [Validators.required, Validators.maxLength, Validators.minLength],
      ],
      email: [
        "",
        [Validators.required, Validators.maxLength, Validators.minLength],
      ],
      password: [
        "",
        [Validators.required, Validators.maxLength, Validators.minLength],
      ],
    });
  }

  onSubmitSignup(values): void {
    console.log("sdsd", values);
  }
}
