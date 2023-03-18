import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { RestrauntMaster } from 'src/app/models/RestrauntLogin/restraunt.model';
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
    private router:Router
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
  }
  showModalDialog() {
    this.displayModal = true;
  }

  ConfirmLogout() {
    localStorage.clear();
    this.router.navigate(['admin/account/login']);
  }
}
