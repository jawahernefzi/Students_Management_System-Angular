import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private service:AuthService){

  }

  canActivate(
    Next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.service.loggedIn || localStorage.getItem('loggedIn')=='true'){
        return true;
      }else{
        this.router.navigate(['\login'])
      }

    return false;
  }

}
