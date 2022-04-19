import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api: HttpClient) { }

  getUserData(): Observable<any> {
    return this.api.get("https://mocki.io/v1/ad19d6ac-649e-4b9a-b998-54c32261149b");
  }
}
