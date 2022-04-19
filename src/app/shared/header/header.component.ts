import { Component, OnInit } from '@angular/core';
import links from "../nav";
@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private navLink; 
  
  ngOnInit() {
    this.navLink = links;
  }
}
