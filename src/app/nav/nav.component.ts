import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navItems:any[] = []

  constructor(private _authService:AuthService, private authGuard : AuthGuard) { }

  ngOnInit() {
    //* Regardez pourquoi a la rénitialisation de la page le bouton disparait malgré l'user connecté?
    // this.navItems = this.initnavItems();
    // this._authService.userLog.subscribe(data => {
    //   if (data) this.navItems.push(
    //     {
    //       url:'/admin',
    //       name:'Profil'
    //     }
    //   )
    //   else this.navItems = this.initnavItems();
    // })
  }

  // initnavItems(){
  //   return [
  //     {
  //     url:'/accueil',
  //     name:'Accueil'
  //     },
  //     {
  //       url:'/connexion',
  //       name:'Connection'
  //     },
  //     {
  //       url:'/register',
  //       name:'Créez un compte'
  //     },
  //   ]
  // }

}
