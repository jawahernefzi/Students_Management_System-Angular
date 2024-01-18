
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list-etudiants/list.component';
import { AddEtudiantComponent } from './add-etudiants/add-etudiant.component';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    /*ListComponent,
    AddEtudiantComponent*/

  ],
  imports:      [ CommonModule, BrowserModule ],
  exports:      [ CommonModule/*,ListComponent,AddEtudiantComponent*/ ,FormsModule ,BrowserModule],
  /*bootstrap: [ ListComponent ]*/
})
export class EtudiantModule { }









