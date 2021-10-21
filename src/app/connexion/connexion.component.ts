import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  constructor(private _api:ApiService, private authService:AuthService, private router:Router, private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email:['',Validators.required],
      Password:['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid){
      return;
    }

    let user = [];
    this._api.checkLogin(this.loginForm.value).subscribe(data => {user=data;
      if (user.length > 0){
        this.authService.seConnecter(user[0]);
        this.router.navigateByUrl('/admin');
      }
    });

    
  }

}
