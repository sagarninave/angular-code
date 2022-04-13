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

  secondStyle: string = "second";
  thirdStyle: string = "third";

  primary: boolean = true;
}
