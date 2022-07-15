import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetDataServService {
  URL="http://localhost:3030/api/bd";
  constructor(private http:HttpClient) { }

  query():Observable<any>{
    let header = new Headers().set('Content-Type', 'Application/JSON');
    return this.http.get(this.URL);
  }
}
