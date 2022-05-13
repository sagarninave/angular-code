import { Injectable } from "@angular/core";
import { ISignup } from "src/app/interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiConstants } from "../constants/api.constants";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onSignup(user: ISignup): Observable<any> {
    return this.http.post(apiConstants.signupUser, user);
  }

  onLogin(user: ISignup): Observable<any> {
    return this.http.get(apiConstants.signupUser + user.id);
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }
}
