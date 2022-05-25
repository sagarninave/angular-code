import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "src/app/interface";
@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  getUser(user_id): void {
    this.userService.getUser(user_id).subscribe((result) => {
      let tempUser = result;
      this.userService
        .getUserAddress(result.address)
        .subscribe((address_result) => {
          tempUser.address = Object.keys(address_result)
            .map(
              (addressItem) => {
                if (addressItem !== "id") return address_result[addressItem];
              }
            )
            .join(", ");
          this.user = tempUser;
        });
    });
  }

  constructor(
    private userService: UserService,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser(this.aRoute.snapshot.params.id);
  }
}
