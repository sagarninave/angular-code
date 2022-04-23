import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "src/app/interface";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user: IUser;

  getUser(user_id): void {
    this.userService.getUser(user_id).subscribe((result) => {
      let tempUser = result;
      this.userService.getUserAddress(result.address).subscribe((address_result) => {
        tempUser.address = address_result;
        this.user = tempUser;
      });
    });
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

  constructor(
    private userService: UserService,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUser(this.aRoute.snapshot.params.id);
  }
}