import { Injectable } from "@angular/core";
import { employee } from "../mock/employee.mock";
@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor() {}
  getAllEmployeeList() {
    return employee;
  }
}
