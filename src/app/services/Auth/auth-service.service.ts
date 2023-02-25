import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto, UserLogin } from 'src/app/models/AuthModel/user.model';
import { Response } from 'src/app/models/comman/comman.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseurl = environment.baseApiUrl
  constructor(private http:HttpClient) {
    console.log('service started')
  }

  SignUp(UserDto:UserDto) : Observable<string>{
    return this.http.post<string>(this.baseurl + '/Auth/register',UserDto)
  }
  Login(user:UserLogin) : Observable<any>{
    return this.http.post<Response>(this.baseurl + '/Auth/login',user);
  }
}
