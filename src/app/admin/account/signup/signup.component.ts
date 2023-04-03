import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { UserDto } from 'src/app/models/AuthModel/user.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:UserDto = {email:null,username:'',userType:'Restraunt',password:''}
  signupForm: FormGroup;

  resposeData:any
  constructor(private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private authservice:AuthServiceService,
    private router:Router,
    private messageService:MessageService){
      this.signupForm = this.formBuilder.group({
        userType:['Restraunt'],
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
    debugger
    this.authservice.SignUp(this.user).subscribe({
      next:(Response:string) => {
        console.log(Response);
        this.messageService.add({severity:'success', summary:'Sign Up', detail:Response});
        this.router.navigate(['admin/account/login']);
      },
      error:response => {
        console.log(response);
        this.messageService.add({severity:'error', summary:'Sign Up', detail:response});
      }
     })
  }
}
