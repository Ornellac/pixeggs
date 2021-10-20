import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monstre } from '../models/monstre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url:string = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  //* Les Monstres :
  public getMonstre(): Observable<any>{
    return this._http.get<any>(`${this._url}/monstre`);
  }

  //* Les stats :
  public getStat() : Observable<any>{
    return this._http.get<any>(`${this._url}/stat`);
  }

}
