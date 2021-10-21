import { Injectable } from '@angular/core';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public seConnecter(userInfo:Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', JSON.stringify(userInfo));
  }
  public estConnecter(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
    //* Test pour clean le storage ;
    localStorage.clear();
  }

}
