import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'StyleBinding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public redColor: string = "red";

  public italicFont: string = "italic";
  public colorBlue: string = "blue";

  public status: boolean = true;
  public conditionalVariableColor1: string = "magenta";
  public conditionalVariableColor2: string = "aqua";

  public user: object = { name: "sagar" };
  public conditionalVariableColor3: string = "green";
  public conditionalVariableColor4: string = "gray";

  public styleObject1: object = {
    "color": "red",
    "font-size": "20px",
    "font-style": "italic",
    "font-weight": "bolder"
  };

  public styleObject2: object = {
    color: "green",
    fontSize: "20px",
    fontStyle: "italic",
    fontWeight: "bolder"
  };

  public ngStyleObject: object = {
    color: "gray",
    fontSize: "20px",
    fontStyle: "italic",
    fontWeight: "bolder"
  }
}
