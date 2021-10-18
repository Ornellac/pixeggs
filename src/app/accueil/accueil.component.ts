import { Monster } from './../models/monster';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public monster:Monster[] = [];

  constructor(private _api:ApiService) { }

  ngOnInit() {
    this._api.getMonster().subscribe(
      (data) => this.monster = data,
      (err) => console.error(err),
      () => console.log("Fin de l'observation")
    );
  }

}
