
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../services/api.service';
import { Utilisateur } from '../models/utilisateur';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public user?:Utilisateur;
  public userTest?:any;

  constructor(private _api:ApiService,private _routes: ActivatedRoute, private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    // this._api.checkUser().subscribe(
    //   (data) => this.user = data,
    //   (err) => console.log(err)
    // );
    this.userTest = localStorage.getItem('ACCESS_TOKEN');
    console.log(this.userTest)
    this.user = JSON.parse(this.userTest)
  }
  
  /*test*/


  deconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}