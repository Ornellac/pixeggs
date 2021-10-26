import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmit=false;

  constructor(private _api:ApiService,private authService:AuthService ,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nom:['', Validators.required],
      Prenom:['', Validators.required],
      DateNaiss:['', Validators.required],
      Email:['', Validators.required],
      Password:['', Validators.required],
      Pseudo:['', Validators.required]
    });
  }
    
  get formControls() { return this.registerForm.controls; }

  senregistrer(){
    console.log(this.registerForm.value);
    this.isSubmit = true;
    if (this.registerForm.invalid){
      return;
    }
    let user = [];
    this._api.register(this.registerForm.value).subscribe(data => {user=data;
      alert('Succes !😀')
      this.router.navigateByUrl('/choix');
    });
  }

  resetForm(){
    this.isSubmit = false;
    this.registerForm.reset();
  }

}
