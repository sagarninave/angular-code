import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { v4 } from "uuid";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { EncryptionService } from "src/app/service/encryption.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private FB: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private encryption: EncryptionService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  createForm(): void {
    this.loginForm = this.FB.group({
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

  onSubmitLogin() {
    this.isSubmitted = true;
    if (this.loginForm.status === "INVALID") {
      return false;
    }
    console.log(this.loginForm.value);

  }
}
