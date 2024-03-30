import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkLogin();
    }
  
    checkLogin(): true | UrlTree {
      if (this.authService.hasAuthenticated()){ 
        return true; 
      }
      return this.router.createUrlTree(['/login']);
    }
}
