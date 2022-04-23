import { Component, OnInit } from '@angular/core';
import links from "../../constants/nav";
@Component({
  selector: 'Binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }

  navLinks:any;

  ngOnInit() {
    this.navLinks = links.filter(i => i.title === "Binding" && i.children)[0].children;
  }

}
