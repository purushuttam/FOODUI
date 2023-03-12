import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from 'src/app/models/AuthModel/user.model';
import { Response } from 'src/app/models/comman/comman.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  apiUrl = environment.baseApiUrl;
  user: UserLogin = { username: '', password: '' };
  loading: boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private AuthService: AuthServiceService,
    private cookieService: CookieService
  ) {
    console.log('Loging Clicked');
    this.loading = false;
  }
  // response:Response
  responseData: any;
  onSubmit() {
    this.loading = true;
    console.log(this.user);
    this.AuthService.Login(this.user).subscribe({
      next: (response: Response) => {
        console.log(response);
        if (response.resp) {
          localStorage.setItem('token', response.respObj);
          localStorage.setItem('refreshToken', response.respMsg);
          this.cookieService.set('token', response.respObj);
          this.cookieService.set('refreshToken', response.respMsg);
          console.log(response.respObj);
          this.router.navigate(['admin/restraunt']);
        } else {
          alert(response.respMsg);
          this.loading = false;
        }
      },
      error: (response) => {
        alert('Wrong Credentials');
        this.loading = false;
        console.log(response);
        // this.router.navigate(['admin/account/signup'])
      },
    });
  }
}
