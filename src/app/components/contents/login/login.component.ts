import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environment/environment';

import { first } from 'rxjs/operators';
import { UserDto, UserLogin } from 'src/app/models/AuthModel/user.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiUrl = environment.baseApiUrl;
  user:UserLogin={username:'',password:''}
  constructor( private http:HttpClient){
    console.log('Loging Clicked')
  }
  ngOnInit() {
}
onSubmit() {
  return this.http.post(this.apiUrl + '/Auth/login',this.user).subscribe(
    result => {
      if(result!= null){
        console.log(result);
        localStorage.setItem('jwt',result.toString());
      }
    }
  );
}

}
