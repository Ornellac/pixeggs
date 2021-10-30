
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

  /* Test */
  // public checkCo(id:number):Observable<Utilisateur>{
  //   return this._http.get<Utilisateur>(`${this._url}/utilisateur/${id}`);
  // }

  // public checkUser():Observable<Utilisateur>{
  //   return this._http.get<Utilisateur>(`${this._url}/utilisateur`);
  // }

  //* Les Monstres :
  public getMonstre(): Observable<any>{
    return this._http.get<any>(`${this._url}/monstre`);
  }

  public getChoixMonstre(body:any):Observable<Monstre[]>{
    return this._http.post<Monstre[]>(`${this._url}/monstre/choix`, body);
  }

  public getUserMonstre(id:number): Observable<Monstre[]>{
    return this._http.get<Monstre[]>(`${this._url}/monstre/${id}`);
  } 

  //* Les stats :
  public getStat() : Observable<any>{
    return this._http.get<any>(`${this._url}/stat`);
  }

}
