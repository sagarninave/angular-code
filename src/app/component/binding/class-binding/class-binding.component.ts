import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ClassBinding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  secondStyle: string = "second common";

  thirdStyle: string = "third common";

  fourthStyle: object = { "fourth common": true };

  fifthStyle: boolean = true;

  sixthStyle: string = "sixth common";

  primary: boolean = true;

  conditionStyle1: string = "condition1 common";

  conditionStyle2: string = "condition2 common";

}
