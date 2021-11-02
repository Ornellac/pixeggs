import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLog = new BehaviorSubject<Utilisateur|null>(null);

  constructor() { }

  public seConnecter(userInfo:Utilisateur){
    this.userLog.next(userInfo);
    localStorage.setItem('ACCESS_TOKEN', JSON.stringify(userInfo));
  }

  public estConnecter(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public deconnecter(){
    this.userLog.next(null);
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.clear();
  }

}
