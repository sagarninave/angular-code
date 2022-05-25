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
  isLoggedIn: boolean;

  ngOnInit() {
    this.init();
  }

  init() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.navLink = links.filter(i => i.access_level === "default" || (i.access_level === "unauthenticated" && !this.isLoggedIn));
  }

  logout(): void {
    localStorage.removeItem("token")
  }
}
