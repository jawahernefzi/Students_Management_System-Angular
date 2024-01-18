import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  constructor(private service:EtudiantService ,private router :Router ) { }
  listEtudiant :Etudiant[]= [];
  ngOnInit(): void {
  }

  addEtudiant(f : NgForm){
    this.service.refreche();
    //console.log(this.service.getNextId());
    let newEtudiant = new Etudiant(this.service.getNextId(), f.value.nom, f.value.prenom, f.value.classe);
    this.service.addEtudiant(newEtudiant);
    this.router.navigate(["/list"]);
  }
}
