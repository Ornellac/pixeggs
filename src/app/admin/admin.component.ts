
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../services/api.service';
import { Utilisateur } from '../models/utilisateur';
import { JsonPipe } from '@angular/common';
import { Monstre } from '../models/monstre';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public user?:Utilisateur;
  public userTest?:any;
  public Monstre:Monstre[] = [];

  constructor(private _api:ApiService,private _routes: ActivatedRoute, private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    this.userTest = localStorage.getItem('ACCESS_TOKEN');
    console.log(this.userTest)
    this.user = JSON.parse(this.userTest);
    this._routes.params.subscribe(
      params => this._api.getUserMonstre(parseInt(params.id)).subscribe(
        (data) => {
          this.Monstre = data
          this._api.getUserMonstre(parseInt(params.id))
        }
      )
    )
  }
  

  deconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}