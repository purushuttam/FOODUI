import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import {
  RestrauntDailyLogin,
  RestrauntMaster,
} from 'src/app/models/RestrauntLogin/restraunt.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { RestrauntDailyLoginService } from 'src/app/services/Restraunt/restraunt-daily-login.service';
import { RestrauntServiceService } from 'src/app/services/Restraunt/restraunt-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent {
  restrauntMaster: string = '';
  displayModal: boolean = false;
  constructor(
    private primengConfig: PrimeNGConfig,
    private restrauntService: RestrauntServiceService,
    private router: Router,
    private AuthService: AuthServiceService,
    private RestrauntDailyLogin: RestrauntDailyLoginService
  ) {
    restrauntService.GetRestrauntMasterById().subscribe({
      next: (response: any) => {
        console.log(response);
        this.restrauntMaster = response.restraunt_name;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.GetRestrauntStatus();
  }
  showModalDialog() {
    this.displayModal = true;
  }

  ConfirmLogout() {
    localStorage.clear();
    this.router.navigate(['admin/account/login']);
  }

  restrauntdailylog: RestrauntDailyLogin = {
    restraunt_daily_login_id: '',
    restraunt_id: '',
    date: '2023-02-28T11:12:28.406',
    login_time: '2023-02-28T11:12:28.406',
    logout_time: '2023-02-28T11:12:28.406',
    total_orders: 0,
    total_orders_value: 0,
    total_completed_order: 0,
    total_completed_orders_value: 0,
    total_cancelled_orders: 0,
    total_cancelled_orders_value: 0,
    total_unconfirmed_orders: 0,
    rating: 0.0,
    is_active: false,
    created_on: '2023-02-28T11:12:28.406',
    created_by: '',
    updated_on: '2023-02-28T11:12:28.406',
    updated_by: '',
  };

  stButon = false;
  stBtnColor = 'p-button-danger';
  stBtnLabel = 'offline';
  Status() {
    if (!this.stButon) {
      this.RestrauntDailyLogin.OnlineRestraunt(
        this.restrauntdailylog
      ).subscribe({
        next: (response: Response) => {
          if (response.resp) {
            this.restrauntdailylog = response.respObj;
            console.log(response);
            this.stButon = true;
            this.stBtnLabel = 'online';
            this.stBtnColor = 'p-button-success';
          } else {
            console.log(response);
          }
        },
        error: (response) => {
          console.log(response);
        },
      });
    } else {
      this.RestrauntDailyLogin.OfflineRestraunt(
        this.restrauntdailylog
      ).subscribe({
        next: (response: Response) => {
          if (response.resp) {
            this.restrauntdailylog = response.respObj;
            console.log(response);
            this.stButon = false;
            this.stBtnLabel = 'offline';
            this.stBtnColor = 'p-button-danger';
          } else {
            console.log(response);
          }
        },
        error: (response) => {
          console.log(response);
        },
      });
    }
  }

  GetRestrauntStatus() {
    this.RestrauntDailyLogin.GetRestrauntStatus().subscribe({
      next: (response: Response) => {
        console.log(response);
        if (response.resp) {
          if(response.respObj.is_active){
            this.restrauntdailylog = response.respObj;
            this.stButon = true;
            this.stBtnLabel = 'online';
            this.stBtnColor = 'p-button-success';
          }
        }else{
          this.stButon = false;
          this.stBtnLabel = 'offline';
          this.stBtnColor = 'p-button-danger';
        }
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
