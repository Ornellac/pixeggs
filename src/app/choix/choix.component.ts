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
      FK_Stat:['', Validators.required],
      FK_Utilisateur:[this.user?this.user['PK_Utilisateur']:'']
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
      alert('Monstre créer avec succes !')
      this.router.navigateByUrl('/admin'); 
      /* AJOUTEZ une nouvelle route pour réalisez l'animation (Plus tard);
      /* Dans le ngOnInit :
      document.documentElement.addEventListener('click', ()=>this.fullScreen());
      document.documentElement.click(); 
      Ensuite je créer cette fonction FullScreen ;
      fullScreen() {
        let elem = document.documentElement;
        let methodPourAnimation = elem.requestFullscreen;
        if (methodPourAnimation) methodPourAnimation.call(elem);
      }
      */
    });
  }

}
