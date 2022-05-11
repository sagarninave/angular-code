import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { v4 } from "uuid";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private FB: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.signupForm.controls;
  }

  createForm(): void {
    this.signupForm = this.FB.group({
      first_name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      last_name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.minLength(8),
          Validators.maxLength(50),
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(18),
        ],
      ],
    });
  }

  onSubmitSignup(values) {
    this.isSubmitted = true;
    if (this.signupForm.status === "INVALID") {
      return false;
    }
    values.id = v4();
    values.mobile = "";
    values.date_of_birth = "";
    values.gender = "";
    values.address = "";
    this.auth.onSignup(values).subscribe((result) => {
      if (result) {
        this.isSubmitted = false;
        this.signupForm.reset();
        this.toastr.success("User registered successfully");
      }
    });
  }
}
