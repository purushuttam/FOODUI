import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {
  // constructor(
  //   private authservice:AuthServiceService,
  //   private rouetr:Router){

  // }
  // {
  //   if(this.authservice.isLoggedIn()){
  //     return true;
  //   }
  //   else{
  //     this.rouetr.navigate(['/login']);
  //     return false;
  //   }
  // }
  constructor(){}
  canActivate() {
    return true;
  }
}
