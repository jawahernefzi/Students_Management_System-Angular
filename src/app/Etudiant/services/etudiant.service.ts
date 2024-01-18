import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  listEtudiant:Etudiant[] =[] ;
  constructor(private http: HttpClient) {
    this.refreche();
  }
  OnInit(){
    this.refreche();
  }
  getDataServer(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]> ('http://localhost:3000/etudiant');
  }
  ngOnChange(){
    this.refreche();
  }
  refreche(){

    this.getDataServer().subscribe(res=>{
      //console.log(res);
      this.listEtudiant= res;
    },err=>{
      console.log(err);
      console.log("mamchetch");
    })


  }
  putDataServer(id :number,etu: Etudiant):void{
    this.http.put<Etudiant[]>('http://localhost:3000/etudiant/'+id,etu).subscribe((data)=>{
      console.log(data);
    },err=>console.log(err));
  }

  removeDataServer(id :number):void{
    this.http.delete<Etudiant[]>('http://localhost:3000/etudiant/'+id).subscribe((data)=>{
      console.log("delete with success");
    },err=>console.log(err));
  }

  postDataServer(b : Etudiant): Observable<Etudiant[]> {
      //header
      const httpHeaders = new HttpHeaders();
      httpHeaders.append('Content-Type', 'application/json');
    return this.http.post<Etudiant[]> ('http://localhost:3000/etudiant',b,{headers:httpHeaders});
  }

  addEtudiant(etudiant : Etudiant){
    this.postDataServer(etudiant).subscribe(res1 =>{
      console.log(res1);
      this.getDataServer().subscribe(res=>{
        this.listEtudiant=res;
        //console.log(res);
      })
    },err=>{console.log(err)})
  }


  getEtudiantById(id : number) : Etudiant{
    return this.listEtudiant.find(
      Etudiant => Etudiant.id === id
    ) || new Etudiant()
  }

  getNextId(){
    this.refreche();
    //console.log(this.refreche());
    //console.log("********");
    //console.log(this.listEtudiant);
    //console.log("********");
    //console.log(this.listEtudiant[this.listEtudiant.length-1].id+1);
    if(this.listEtudiant.length<1){
      return 1;
    }
    return (this.listEtudiant[this.listEtudiant.length-1].id)+1;
  }
  editEtudiant(etu :Etudiant){
    //console.log(etu);
    console.log(this.listEtudiant);
    // this.listEtudiant = this.listEtudiant.map(
    //   e => {
    //     if (e.id === etu.id)
    //       return etu
    //     else
    //       return e;
    //   }
    // )

    this.putDataServer(etu.id,etu);
    this.refreche();
    console.log(this.listEtudiant);
  }

  deleteEtudiant(id : number) {
    this.removeDataServer(id);
  }
}
