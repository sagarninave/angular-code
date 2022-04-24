import { Component, OnInit } from "@angular/core";
import links from "../../constants/nav";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {

  constructor() {}

  navLinks:any;

  ngOnInit() {
    this.navLinks = links.filter(i => i.title === "Forms" && i.children)[0].children;
  }
}
