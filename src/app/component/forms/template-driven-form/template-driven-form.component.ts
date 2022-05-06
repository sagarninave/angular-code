import { Component, OnInit, ViewChild } from "@angular/core";
@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(value): void {
    console.log(value);
    console.log(JSON.stringify(value));
  }
}
