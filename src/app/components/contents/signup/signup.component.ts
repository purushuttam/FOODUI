import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { UserDto } from 'src/app/models/AuthModel/user.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user:UserDto = {email:null,username:'',userType:'Customer',password:''}


  resposeData:any
  constructor(
    private primengConfig: PrimeNGConfig,
    private authservice:AuthServiceService,
    private router:Router){
    console.log("SignUp Clicked")
  }

  onSubmit(){

    this.authservice.SignUp(this.user).subscribe( result =>
       {
        if(result != null){
          console.log(result)
          this.resposeData = result
          localStorage.setItem('token',this.resposeData)
          this.router.navigate([''])
        }
       }
    )
  }
}
