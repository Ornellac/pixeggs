import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss']
})
export class ChoixComponent implements OnInit {

  public user?:Utilisateur;
  public userTest?:any;
  monstreForm!:FormGroup;
  valide = false;

  constructor(private _api:ApiService,private _routes: ActivatedRoute, private authService: AuthService, private router: Router, private formBuilder:FormBuilder) {
    
  }

  ngOnInit() {
    this.userTest = localStorage.getItem('ACCESS_TOKEN');
    console.log(this.userTest)
    this.user = JSON.parse(this.userTest)
    this.monstreForm = this.formBuilder.group({
      NomMonstre:['', Validators.required],
      Exp:[''],
      FK_Stat:[''],
      FK_Utilisateur:['']
    });
  }

  get formControls(){ return this.monstreForm.controls; }

  choixMonstre(){
    console.log(this.monstreForm.value);
    this.valide = true;
    if (this.monstreForm.invalid){
      return;
    }
    let monstre = [];
    this._api.getChoixMonstre(this.monstreForm.value).subscribe(data => {monstre=data;
      alert('Monstre choisis avec succes !')
      // this.router.navigateByUrl('/accueil');
      //* FAIRE CETTE PARTIE POUR ANIMATION DU MONSTRE CHOISI 
    });
  }

}
