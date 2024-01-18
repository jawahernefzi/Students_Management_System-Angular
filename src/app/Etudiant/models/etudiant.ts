enum ClasseT {
  C1,C2,C3
}
export class Etudiant {
  id : number;
  nom : string;
  prenom : string;
  classe : ClasseT;

  constructor(id : number = 0, nom : string = "", prenom : string = "", classe : ClasseT=ClasseT.C1){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.classe = classe;
  }
}
