import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  private upperCaseString: string = "sagar ninave";

  private lowerCaseString: string = "SAGAR NINAVE";

  private titleCaseString: string = "sagar ninave";

  private dateString: string = "12/9/2019";

  private sliceString: string = "Hello Good Morning!";

  private nullProperty: string = "sagar";

  public json = {
    "city": "Jaipur",
    "country": "India"
  }

}
