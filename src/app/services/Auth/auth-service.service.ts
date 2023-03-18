import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDto, UserLogin } from 'src/app/models/AuthModel/user.model';
import { Response, TokenResponse } from 'src/app/models/comman/comman.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseurl = environment.baseApiUrl;
  constructor(private http: HttpClient, private router: Router) {
    console.log('service started');
  }
  httpOphtions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  SignUp(UserDto: UserDto): Observable<string> {
    return this.http.post<string>(this.baseurl + '/Auth/register', UserDto);
  }
  Login(user: UserLogin): Observable<any> {
    return this.http.post<Response>(this.baseurl + '/Auth/login', user);
  }
  GenerateRefreshToken(token: TokenResponse): Observable<Response> {
    return this.http.post<Response>(
      this.baseurl + '/Auth/refresh-token',
      token
    );
  }
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  SaveToken(tokendata: any) {
    localStorage.setItem('token', tokendata.respObj);
    console.log(tokendata.token);
    console.log(tokendata.refreshToken);
    localStorage.setItem('refreshToken', tokendata.respMsg);
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }
  GetRefreshToken() {
    return localStorage.getItem('refreshToken') || '';
  }
  HaveAcces() {
    var loginToken = localStorage.getItem('token') || '';
    var _extractedtoken = loginToken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    if (_finaldata.role == '3') {
      return true;
    }
    console.log(_finaldata);
    alert('You not having Access');
    return false;
  }

  LogOut() {
    alert('Your Session Expired');
    localStorage.clear();
    this.router.navigate(['admin/account/login']);
  }
}
