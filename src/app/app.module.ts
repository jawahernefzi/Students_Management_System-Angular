import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Etudiant/list-etudiants/list.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEtudiantComponent } from './Etudiant/add-etudiants/add-etudiant.component'
import { AuthComponent } from './Auth/auth/auth.component';
import { EtudiantModule } from './Etudiant/etudiant.module';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddEtudiantComponent,
    AuthComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    EtudiantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
