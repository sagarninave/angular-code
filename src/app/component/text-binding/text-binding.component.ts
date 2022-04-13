import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'TextBinding',
  templateUrl: './text-binding.component.html',
  styleUrls: ['./text-binding.component.scss']
})

export class TextBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name: string = "Sagar";
  public today = new Date();
  fun = (x, y) => {
    return x + y;
  }
  user={
    name:"sagar ninave",
    age:"26",
    gender:"male"
  }
}