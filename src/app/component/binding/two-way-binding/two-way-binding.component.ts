import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'TwoWayBinding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public twoWayBinding: string = "";

  public username: string = "";

  public username1: string = "";
}
