import { Component, OnInit } from '@angular/core';
import links from "../../constants/nav";
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  navLink;

  ngOnInit() {
    this.init();
  }

  init() {
    const isLoggedIn = this.authService.isLoggedIn();
    this.navLink = links.filter(i => i.access_level === "default" || (i.access_level === "unauthenticated" && !isLoggedIn));
  }
}
