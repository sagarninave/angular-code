import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { v4 } from "uuid";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/service/user.service";
import { IUser, IUserAddress } from "src/app/interface";
@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  isSubmitted: boolean = false;

  @Output() refresh = new EventEmitter<any>();

  constructor(
    private FB: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
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
      mobile: ["", [Validators.required, Validators.maxLength(10)]],
      date_of_birth: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      address: this.FB.group({
        first_line: ["", [Validators.required]],
        second_line: ["", [Validators.required]],
        landmark: ["", [Validators.required]],
        city: ["", [Validators.required]],
        district: ["", [Validators.required]],
        state: ["", [Validators.required]],
        country: ["", [Validators.required]],
        pin_code: ["", [Validators.required]],
      }),
    });
  }

  onSubmitAddUser() {

    this.isSubmitted = true;

    if (this.addUserForm.status === "INVALID") {
      return false;
    }

    this.addUserForm.value.id = v4();
    this.addUserForm.value.role = "member";
    this.addUserForm.value.address.id = v4();

    this.userService.getUsers().subscribe((users: IUser[]) => {
      const userExist = users.filter(
        (user) =>
          this.addUserForm.value.email === user.email &&
          this.addUserForm.value.role === user.role
      );
      if (userExist.length === 0) {
        this.auth
          .onUserAddress(this.addUserForm.value.address)
          .subscribe((addressResult: IUserAddress) => {
            if (addressResult && addressResult.id) {
              this.addUserForm.value.address = addressResult.id;
              this.auth.onSignup(this.addUserForm.value).subscribe((userResult: IUser) => {
                if (userResult) {
                  this.isSubmitted = false;
                  this.addUserForm.reset();
                  this.refresh.emit(true);
                  this.toastr.success("User registered successfully");
                  document.getElementById("close").click();
                }
              });
            }
          });
      } else {
        this.toastr.error("User already exist");
      }
    });
  }

  onClose(): void {
    this.addUserForm.reset();
  }
}
