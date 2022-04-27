import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component-interaction",
  templateUrl: "./component-interaction.component.html",
  styleUrls: ["./component-interaction.component.scss"],
})
export class ComponentInteractionComponent implements OnInit {
  parentValue: object = {
    id: "001",
    first_name: "sagar",
    last_name: "ninave",
    email: "sagarninave@gmail.com",
    mobile: "9657445206",
  };

  dataFromChild;

  constructor() {}

  ngOnInit() {}

  getDataFromChild(data) {
    this.dataFromChild = data;
  }
}
