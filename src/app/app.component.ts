import { Component,OnChanges } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './Auth/services/auth.service';

// import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etudiants-CRUDOFFLINE';
constructor(private router: Router,private service:AuthService){

}

  ngOnInit(){
    if(this.service.loggedIn){
      let a=document.getElementById("nav");
      a?.classList.remove("none");
    }
  }

  OnChanges(){
    if(this.service.loggedIn){
      let a=document.getElementById("nav");
      a?.classList.add("none");
    }else{
      let a=document.getElementById("nav");
      a?.classList.remove("none");
    }
  }

  toAdd(){

  const a =document.getElementsByClassName("nav-link");
  a[0].classList.remove("link-dark");
  a[1].classList.add("link-dark");
  this.router.navigate(['list/add']);

  }

    toList(){

    const a =document.getElementsByClassName("nav-link");
    a[1].classList.remove("link-dark");
    a[0].classList.add("link-dark");
    this.router.navigate(['/list']);

    }
    logOut(){
    this.service.loggedIn=false;
    localStorage.setItem('loggedIn','false')
    this.router.navigate(['/login']);
    let a=document.getElementById("nav");
    a?.classList.add("none");
    }


}
