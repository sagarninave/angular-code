import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'EventBiding',
  templateUrl: './even-biding.component.html',
  styleUrls: ['./even-biding.component.scss']
})

export class EvenBidingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public today = (): void => {
    alert(new Date().toLocaleString());
  };

  public myName1 = (name: string): void => {
    alert(`My mane is ${name}`)
  };

  public myName2 = (name: any): void => {
    alert(name.value);
  };

  public eventLog = (event: Event): void => {
    alert("Check Console");
    console.log(event);
  };

  public fullname: string = "Sagar Ninave";
  public toggleFullName = (name: string): void => {
    if (name === this.fullname) {
      this.fullname = "Sanket Wankhede";
    } else {
      this.fullname = "Sagar Ninave"
    }
  }

  public inputEvent: string = "";
  public onInputEvent = (event: Event): void => {
    this.inputEvent = (<HTMLInputElement>event.target).value;
  };

  public upKeyInput: string = "";
  public onUpKeyEvent = (event: any): void => {
    this.upKeyInput = event.target.value;
  }

  public enterEvent: string = "";
  public onEnterEvent = (value: string): void => {
    this.enterEvent = value;
  }

  public shiftEnterEvent: string = "";
  public onShiftEnterEvent = (event: Event): void => {
    console.log("Shift Enter Event : ", event)
    this.shiftEnterEvent = (<HTMLInputElement>event.target).value;
  };

  public controlEnterEvent: string = "";
  public onControlEnterEvent = (event: Event): void => {
    console.log("Control Enter Event : ", event);
    this.controlEnterEvent = (<HTMLInputElement>event.target).value;
  }

  public controlShiftEnterEvent: string = "";
  public onControlShiftEnterEvent = (event: Event): void => {
    console.log("Control Shift Enter Event : ", event)
    this.controlShiftEnterEvent = (<HTMLInputElement>event.target).value;
  }

  public focusInOut: string = "";
  public onFocusInOut = (value: string): void => {
    this.focusInOut = value;
  }

  public months: any = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  public onMonthChange = (event): void => {
    alert(event.target.value);
  }

  public todos: any = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public onAddToDo = (todo: string) => {
    todo && this.todos.push(todo);
  };

  public onRemoveToDo = (): void => {
    this.todos.pop();
  };

  public counter: number = 0;
  public onCounter = (): void => {
    this.counter += 1;
  }
};