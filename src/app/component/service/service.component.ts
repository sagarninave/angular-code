import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../service/employee.service";
import { IEmployee } from "src/app/interface";
import { Router } from "@angular/router";
import { employee } from "./../../mock";
@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  employees: IEmployee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployeeList();
  }
}