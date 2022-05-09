import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { v4 } from "uuid";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private FB: FormBuilder, private auth: AuthService) {}

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
    values.id = v4();
    values.mobile = "";
    values.date_of_birth = "";
    values.gender = "";
    values.address = "";

    this.auth
      .onSignup(values)
      .subscribe((result) => console.log("result : ", result));
  }
}
