import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"],
})
export class ChildComponentComponent implements OnInit {
  @Input() parentValue;
  @Output() dataToParent = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  sendDataToParent() {
    const data = {
      employee_id: "001",
      employee_first_name: "sanket",
      employee_last_name: "wankhede",
      employee_email: "sanketwankhede@gmail.com",
      employee_mobile: "9657445206",
    };
    this.dataToParent.emit(data);
  }
}
