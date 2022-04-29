import { Component, OnInit, Input, SimpleChange } from "@angular/core";

@Component({
  selector: "app-life-cycle-child",
  templateUrl: "./life-cycle-child.component.html",
  styleUrls: ["./life-cycle-child.component.scss"],
})
export class LifeCycleChildComponent implements OnInit {
  @Input() name;
  constructor() {}

  ngOnInit() {
    console.log("Child ngOnInit");
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("Child simpleChanges : ", changes);
    console.log("Child simpleChanges previousValue : ", changes.previousValue);
    console.log("Child simpleChanges currentValue : ", changes.currentValue);
    console.log("Child ngOnChange name : ", this.name);
  }

  ngDoCheck(){
    console.log("Child ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("Child ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("Child ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("Child ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Child ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("Child ngOnDestroy");
  }
}
