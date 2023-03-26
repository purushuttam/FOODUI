import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { environment } from 'src/environment/environment';

import { first } from 'rxjs/operators';
import { UserDto, UserLogin } from 'src/app/models/AuthModel/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { Response } from 'src/app/models/comman/comman.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  apiUrl = environment.baseApiUrl;
  user: UserLogin = { username: '', password: '' };
  constructor(
    private AuthService: AuthServiceService,
    private router:Router
  ) {
    console.log('Loging Clicked');
  }
  onSubmit() {
    this.AuthService.Login(this.user).subscribe({
      next: (response: Response) => {
        if (response.resp) {
          localStorage.setItem('token', response.respObj);
          localStorage.setItem('refreshToken', response.respMsg);
          // this.cookieService.set('token', response.respObj);
          // this.cookieService.set('refreshToken', response.respMsg);
          console.log(response.respObj);
          this.router.navigate(['/details/restraunt-food/cart']);
        }
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
