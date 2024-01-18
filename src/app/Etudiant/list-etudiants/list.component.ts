import { Component, OnChanges, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { EtudiantService } from '../services/etudiant.service';
import { faTrash,faPen,faSave } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faPen=faPen;
  faTrash=faTrash;
  faSave=faSave;
  listEtudiant :Etudiant[] = [];
  newEtudiant:Etudiant=new Etudiant();
  constructor(private service: EtudiantService,private router : Router) {

}

  ngOnInit(): void {
    //console.log("int");
    this.service.getDataServer().subscribe(res=>{
      //console.log("listRev:")
      //console.log(res);
      this.listEtudiant=res;
    })
  }

  editEtudiant(id: number,t : NgModel[]){
    console.log(id);
    const iconSv = document.querySelector(".save"+id);
    const iconEdit = document.querySelector(".edit"+id);
    const nom = document.querySelector(".nom"+id);
    const prenom = document.querySelector(".prenom"+id);
    const classe = document.querySelector(".classe"+id);
    // console.log(".nom"+id);
    // console.log(nom);
    // console.log(".prenom"+id);
    // console.log(prenom);
    // console.log(".classe"+id);
    // console.log(classe);
    // console.log(".edit"+id);
    // console.log(iconEdit);
    // console.log(".save"+id);
    // console.log(iconSv);


    if(iconSv!=null && iconEdit!=null && classe!=null && nom!=null && prenom!=null){



    if(iconSv.classList[0]=='none'){
        classe.removeAttribute("readonly");
        nom.removeAttribute("readonly");
        prenom.removeAttribute("readonly");
      iconSv.classList.remove("none");
      iconEdit.classList.add("none");
    }else{

      // console.log(t[0].value);
      // console.log(t[1].value);
      // console.log(t[2].value);
      //console.log(nom.textContent);


      nom.setAttribute("readonly","readonly") ;
      prenom.setAttribute("readonly","readonly");
      classe.setAttribute("readonly","readonly");
      iconSv.classList.add("none");
      iconEdit.classList.remove("none");
      this.newEtudiant=new Etudiant(id,t[0].value,t[1].value,t[2].value||"");
      console.log(this.newEtudiant);
      this.service.editEtudiant(this.newEtudiant);
    }
  }







  }
  removeEtudiant(id :number){
    this.reloadCurrentRoute();
    this.service.deleteEtudiant(id);
    //this.ngOnInit();

  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
}

}
