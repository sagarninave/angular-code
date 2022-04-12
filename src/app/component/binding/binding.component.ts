import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name: string = "Sagar";
  public today = new Date();
  public image: string = "https://media-exp1.licdn.com/dms/image/C5616AQEO-WRgMHtbOg/profile-displaybackgroundimage-shrink_200_800/0/1600149189271?e=1655337600&v=beta&t=LRvO6K6leVnbp80DMegnrfCt8F-g2-0_LmSyfExSCz8"
  public message: string = "Hello Message";
  fun = (x, y) => {
    return x + y;
  }
  user={
    name:"sagar ninave",
    age:"26",
    gender:"male"
  }
  allow = true; 
}
