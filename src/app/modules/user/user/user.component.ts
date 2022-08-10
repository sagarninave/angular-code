import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../../service/user.service";
import { IUser } from "src/app/interface";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  isOpen: boolean = false;
  users: IUser[] = [];
  search: string = "";
  isEditUser: boolean = false;
  editUserData: IUser;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  onOpen() {
    this.isOpen = true;
  }

  getUsersData(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result.filter(user => user.role === "member");
    });
  }

  goToDetails(id): void {
    this.router.navigate(["user", id]);
  }

  editUser(e, user): void {
    e.stopPropagation();
    document.getElementById("addUserBtn").click();
    this.isEditUser = true;
    let tempUser = user;
    this.userService
      .getUserAddress(user.address)
      .subscribe((address_result) => {
        let address = {};
        for (let i of Object.keys(address_result)) {
          address[i] = address_result[i];
        }
        tempUser.address = address;
      });
    this.editUserData = tempUser;
  }

  deleteUser(e, userId): void {
    e.stopPropagation();
    this.userService.deleteUser(userId).subscribe((result) => {
      this.toastr.success("User delete successfully");
      this.getUsersData();
    })
  }

  onCloseAddEditPopup(value) {
    this.isOpen = false;
  }
}
