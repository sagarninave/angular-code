import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../../service/user.service";
import { IUser } from "src/app/interface";
import { Router } from "@angular/router";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  users: IUser[] = [];
  search: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
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

  deleteUser(e): void {
    console.log("deleteUser")
    e.stopPropagation();
  }
}
