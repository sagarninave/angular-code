import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { v4 } from "uuid";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
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
    private toastr: ToastrService,
    private router: Router
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

  onSubmitSignup() {
    this.isSubmitted = true;
    if (this.signupForm.status === "INVALID") {
      return false;
    }
    this.signupForm.value.id = v4();
    this.signupForm.value.mobile = "";
    this.signupForm.value.date_of_birth = "";
    this.signupForm.value.gender = "";
    this.signupForm.value.address = "";
    this.router.navigate(["auth/login"]);
    this.auth.onSignup(this.signupForm.value).subscribe((result) => {
      if (result) {
        this.isSubmitted = false;
        this.signupForm.reset();
        this.toastr.success("User registered successfully");
      }
    });
  }
}
