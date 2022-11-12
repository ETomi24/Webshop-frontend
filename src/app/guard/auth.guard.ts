import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
    
    
  constructor(private storageService : StorageService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.storageService.getUsername()) {
      const userRole = this.storageService.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        if(userRole == "ROLE_ADMIN"){
          this.router.navigate(['/admin-list']);
        } else {
          this.router.navigate(['/product-list']);
        }
        
        return false;
      }
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
