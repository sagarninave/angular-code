import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiConstants } from "src/app/constants/api.constants";

@Injectable({
  providedIn: "root",
})
export class UserService {
  getUsers(): Observable<any> {
    return this.api.get(apiConstants.getAllUsers);
  }

  getUserAddress(id): Observable<any> {
    return this.api.get(`${apiConstants.getUserAddress}/${id}`);
  }

  getUser(id): Observable<any> {
    return this.api.get(`${apiConstants.getAllUsers}/${id}`);
  }

  deleteUser(id): Observable<any> {
    return this.api.delete(`${apiConstants.getAllUsers}/${id}`);
  }

  constructor(private api: HttpClient) {}
}
