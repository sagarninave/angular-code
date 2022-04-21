import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user.service";
import { v4 } from "uuid";
import { IUser } from "src/app/interface/user.interface";
@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: IUser[];

  getUsersData(): void {
    this.userService.getUsers().subscribe((result) => {
      let tempUser = result;
      for (let i = 0; i < tempUser.length; i++) {
        this.userService
          .getUserAddress(result[i].address)
          .subscribe((result) => {
            tempUser[i].address = result;
          });
      }
      this.users = tempUser;
    });

    // let myuuid = v4();
    // console.log("Your UUID is: " + myuuid);
  }

  userAddress(address) {
    let {
      first_line,
      second_line,
      landmark,
      city,
      district,
      state,
      country,
      pin_code,
    } = address;
    return `${first_line}, ${second_line}, ${landmark}, ${city}, ${district}, ${state}, ${country}, ${pin_code},`;
  }

  ngOnInit(): void {
    this.getUsersData();
  }
}
