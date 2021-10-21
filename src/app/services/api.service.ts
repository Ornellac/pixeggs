import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monstre } from '../models/monstre';
import { Utilisateur } from '../models/utilisateur';
import { Stat } from '../models/stat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url:string = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  // //! TEST:
  // getTypeRequest() {
  //   return this._http.get(`${this._url}/utilisateur`).pipe(map(res => {
  //   return res;
  //   }));
  // }
  // postTypeRequest() {
  //   return this._http.post(`${this._url}/utilisateur`).pipe(map(res => {
  //   return res;
  //   }));
  // }
  // //! FIN TEST;

  //* Les Monstres :
  public getMonstre(): Observable<any>{
    return this._http.get<any>(`${this._url}/monstre`);
  }

  //* Les stats :
  public getStat() : Observable<any>{
    return this._http.get<any>(`${this._url}/stat`);
  }

}
