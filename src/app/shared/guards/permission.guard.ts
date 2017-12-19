import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(private userService:  UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (next.routeConfig.path === this.userService.getPermissions()) {
      return true;
    } else {
      alert('You have no permissions to this page.')
      return false
    };
  } 

}
