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

  public checkLogin(body:any):Observable<Utilisateur[]>{
    return this._http.post<Utilisateur[]>(`${this._url}/utilisateur/check`, body);
  }

  public register(body:any):Observable<Utilisateur[]>{
    return this._http.post<Utilisateur[]>(`${this._url}/utilisateur/register`, body);
  }

  //* Les Monstres :
  public getMonstre(): Observable<Monstre[]>{
    return this._http.get<Monstre[]>(`${this._url}/monstre`);
  }

  public getChoixMonstre(body:any):Observable<Monstre[]>{
    return this._http.post<Monstre[]>(`${this._url}/monstre/choix`, body);
  }


  // TEST :

  public getUserMonstre(id:number): Observable<Monstre[]>{
    return this._http.get<Monstre[]>(`${this._url}/monstre/${id}`);
  } 

  //* Les stats :
  public getStat() : Observable<Stat[]>{
    return this._http.get<Stat[]>(`${this._url}/stat`);
  }

  // TEST :
  

}
