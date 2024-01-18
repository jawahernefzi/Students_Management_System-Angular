import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }

  ngOnInit(): void {
  }

  logIn(f:NgForm):void {
   // console.log(f.value.mail +"   "+f.value.password);

    if(f.value.mail=="admin" && f.value.password=="admin"){
      this.service.loggedIn=true;
      localStorage.setItem('loggedIn','true')
      this.service.loginCount=this.service.loginCount+3;
      this.router.navigate(["/list"]);

      console.log(f);
    }else
    {
      let a=document.getElementById("alert1");
      let b=document.getElementById("alert2");
      //console.log(a?.classList[2]+"     "+b?.classList[2]);
      if(a?.classList[2]=="none" && b?.classList[2]=="none"){
        a?.classList.remove("none");
      }else{
        a?.classList.add("none");
        b?.classList.remove("none");
      }

    }
  }

}
