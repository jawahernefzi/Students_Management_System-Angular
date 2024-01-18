import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './Etudiant/add-etudiants/add-etudiant.component';
import { ListComponent } from './Etudiant/list-etudiants/list.component';
import { AuthComponent } from './Auth/auth/auth.component';
import { AuthGuard } from './Auth/guards/auth.guard';


const routes: Routes = [
  {path : "login", component: AuthComponent},
  {path : "list", component: ListComponent,canActivate:[AuthGuard]},
  {path : "list/add", component: AddEtudiantComponent,canActivate:[AuthGuard]},
  {path : "", redirectTo : "login", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
