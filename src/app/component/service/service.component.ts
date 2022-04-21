import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user.service";
import { v4 } from "uuid";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  constructor(private userService: UserService) {}

  users;

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });
    let myuuid = v4();
    console.log("Your UUID is: " + myuuid);
  }
}
