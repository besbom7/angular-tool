import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  public getData(value : string) : Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+value);
  }
}
