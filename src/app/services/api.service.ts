import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monster } from './../models/monster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url:string = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  public getMonster(): Observable<any>{
    return this._http.get<any>(`${this._url}/monster`);
  }


}
