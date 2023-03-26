import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  signupForm: FormGroup;

  resposeData:any
  constructor(private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private authservice:AuthServiceService,
    private router:Router){
      this.signupForm = this.formBuilder.group({
        userType:['Customer'],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      });
    console.log("SignUp Clicked")
  }

  ngOnInit() {

  }

  onSubmitS() {
    if (this.signupForm.invalid) {
      return;
    }
    console.log(this.signupForm.value);
  }

  onSubmit(){
    this.authservice.SignUp(this.user).subscribe({
      next:(Response:any) => {
        console.log(Response);
      },
      error:response => {
        console.log(response);
      }
     })
  }
}
