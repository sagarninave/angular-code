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
  users: IUser[] = [];
  search: string = "";

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result.filter(user => user.role === "member");
    });
  }

  goToDetails(id): void {
    this.router.navigate(["user", id]);
  }

  addUser(): void {
    console.log("add")

  }

  editUser(e): void {
    console.log("editUser")
    e.stopPropagation();
  }

  deleteUser(e, userId): void {
    console.log("deleteUser")
    e.stopPropagation();
    this.userService.deleteUser(userId).subscribe((result) => {
      this.toastr.success("User delete successfully");
      this.getUsersData();
    })
  }
}
