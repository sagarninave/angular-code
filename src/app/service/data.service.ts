import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiconstants } from "src/app/constants/apiconstants";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private api: HttpClient) {}

  getUserData(): Observable<any> {
    return this.api.get(apiconstants.baseUrl + apiconstants.getAllComments);
  }
}
