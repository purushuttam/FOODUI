import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/AuthModel/user.model';
import { Response } from 'src/app/models/Complain/complain.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiUrl = environment.baseApiUrl;
  user:UserLogin={username:'',password:''}
  constructor( private http:HttpClient,
    private router:Router,
    private AuthService: AuthServiceService){
    console.log('Loging Clicked')
  }
  // response:Response
  responseData:any
  onSubmit() {
    console.log(this.user);
    this.AuthService.Login(this.user).subscribe({
      next: (response:Response) => {
        console.log(response);
        if(response.resp){
          console.log(response.respObj)
        this.router.navigate(['admin/restraunt'])
        }
      },
      error: response => {
        console.log(response)
        // this.router.navigate(['admin/account/signup'])
      }
    })
  }
}
