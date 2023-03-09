import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthServiceService,private router:Router ){

  }
  canActivate(){
    if(this.authService.HaveAcces()){
      return false;
    }
    else{
      this.router.navigate(['admin/account/login'])
      return false;
    }
    return true;
  }

}
