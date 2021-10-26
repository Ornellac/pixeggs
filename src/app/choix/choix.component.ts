import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss']
})
export class ChoixComponent implements OnInit {

  constructor(private _api:ApiService, private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

}
