
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../services/api.service';
import { Utilisateur } from '../models/utilisateur';
import { Monstre } from '../models/monstre';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public user!:Utilisateur;
  public userTest!:any;
  public Monstre!: Monstre;

  constructor(private _api:ApiService,private _routes: ActivatedRoute, private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    this.userTest = localStorage.getItem('ACCESS_TOKEN');
    console.log(this.userTest)
    this.user = JSON.parse(this.userTest);
    if(this.user)this._api.getUserMonstre(this.user?.PK_Utilisateur).subscribe(data => {
      console.log(data)
      this.Monstre = data})
  }

  infoMonstre(){
    
  }

  deconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}