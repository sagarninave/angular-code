import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiconstants } from "src/app/constants/apiconstants";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private api: HttpClient) {}

  getUsers(): Observable<any> {
    return this.api.get(apiconstants.baseUrl + apiconstants.getAllUsers);
  }
  
}
