import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private links: Array<object> = [
    { url: "/binding", title: "Binding" },
    { url: "/pipes", title: "Pipes" },
    { url: "/directives", title: "Directives" }
  ];
}
