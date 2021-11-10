import { ChoixComponent } from './choix/choix.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//? Mes imports pour l'authentification:
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'connexion', pathMatch:'full'},
  {path:'connexion', component:ConnexionComponent},
  {path:'admin', canActivate: [AuthGuard], component:AdminComponent},
  {path:'register', component:RegisterComponent},
  {path:'choix', canActivate: [AuthGuard], component:ChoixComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
