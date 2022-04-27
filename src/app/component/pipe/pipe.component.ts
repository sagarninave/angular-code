import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.scss"],
})
export class PipeComponent implements OnInit {
 
  upperCaseString: string = "sagar ninave";

  lowerCaseString: string = "SAGAR NINAVE";

  titleCaseString: string = "sagar ninave";

  dateString: string = "12/9/2019";

  sliceString: string = "Hello Good Morning!";

  nullProperty: string = "sagar";

  json: object = {
    city: "Jaipur",
    country: "India",
  };

  constructor() {}

  ngOnInit() {}
}
