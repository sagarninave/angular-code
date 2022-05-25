import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { v4 } from "uuid";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { EncryptionService } from "src/app/service/encryption.service";
import { UserService } from "src/app/service/user.service";
import { IUser } from "src/app/interface";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  isSubmitted: boolean = false;
  @Output() refresh = new EventEmitter<any>();
  constructor(
    private FB: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private encryption: EncryptionService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.addUserForm.controls;
  }

  createForm(): void {
    this.addUserForm = this.FB.group({
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
      mobile: [
        "",
        [
          Validators.required,
          Validators.maxLength(10),
        ],
      ],
    });
  }

  onSubmitAddUser() {
    this.isSubmitted = true;
    if (this.addUserForm.status === "INVALID") {
      return false;
    }

    this.addUserForm.value.id = v4();
    this.addUserForm.value.mobile = "";
    this.addUserForm.value.date_of_birth = "";
    this.addUserForm.value.gender = "";
    this.addUserForm.value.role = "member";
    this.addUserForm.value.address = "";

    this.userService.getUsers().subscribe((users: IUser[]) => {
      const userExist = users.filter((i) => this.addUserForm.value.email === i.email);
      if (userExist.length === 0) {
        this.auth.onSignup(this.addUserForm.value).subscribe((result) => {
          if (result) {
            this.isSubmitted = false;
            this.addUserForm.reset();
            document.getElementById("close").click();
            this.refresh.emit(true);
            this.toastr.success("User registered successfully");
          }
        });EventEmitter
      } else {
        this.toastr.error("User already exist");
      }
    });
  }

}
