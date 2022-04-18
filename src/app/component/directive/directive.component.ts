import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private isNgIf: boolean = true;

  private isNgIfElse: boolean = true;

  private isNgIfElseThen: boolean = true;

  private ngSwitchValue: number = 1;

  private cssStringVar: string = 'red fontWeight';

  private cssStringVarClass: string = 'red fontWeight';

  private cssClassArray: string[] = ['red', 'fontWeight'];

  public styleObj = { 'color': 'red', 'font-size': '1rem', 'font-weight': 'bold', 'margin':'0' }

  people: any[] = [
    { name: "Douglas Pace", "country": 'UK' },
    { name: "Mcleod Mueller", "country": 'USA' },
    { name: "Day Meyers", "country": 'HK' },
    { name: "Aguirre Ellis", "country": 'UK' },
    { name: "Cook Tyson", "country": 'USA' }
  ];

  getColors(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  };
}
