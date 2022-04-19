import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getUserData().subscribe(result => console.log(result));
  }

}
