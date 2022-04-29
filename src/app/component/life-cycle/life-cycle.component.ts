import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit{
 
  constructor() { }

  ngOnInit() {
    console.log("Parent ngOnInit");
  }

  ngOnChanges(){
    console.log("Parent ngOnChanges");
  }

  ngDoCheck(){
    console.log("Parent ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("Parent ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("Parent ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("Parent ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Parent ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("Parent ngOnDestroy");
  }

}