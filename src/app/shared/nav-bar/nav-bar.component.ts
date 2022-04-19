import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() links;
  
  constructor() { }

  private navLinks;

  ngOnInit() {
    this.navLinks = this.links;
  }

}
