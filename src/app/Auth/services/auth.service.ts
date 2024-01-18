import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false;
  loginCount:number=0;
  constructor() {

  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }

}
