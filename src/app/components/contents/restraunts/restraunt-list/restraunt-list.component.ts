import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/models/comman/comman.model';
import { RestrauntMaster } from 'src/app/models/RestrauntLogin/restraunt.model';
import { RestrauntServiceService } from 'src/app/services/Restraunt/restraunt-service.service';

@Component({
  selector: 'app-restraunt-list',
  templateUrl: './restraunt-list.component.html',
  styleUrls: ['./restraunt-list.component.css'],
})
export class RestrauntListComponent implements OnInit {
  cityName: string = '';
  restrauntList: RestrauntMaster[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private restrauntService: RestrauntServiceService
  ) {
    activeRoute.queryParams.subscribe((params) => {
      this.cityName = params['city_code'];
      console.log('cityName:' + this.cityName);
    });
  }
  ngOnInit(): void {
    this.restrauntService.GetAllRestrauntByCityCode(this.cityName).subscribe({
      next: (response: Response) => {
        if (response.resp) {
          this.restrauntList = response.respObj;
          console.log(response.respObj);
        } else {
          console.log(response.respMsg);
        }
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  OnRestrauntSelect(restraunt_id:string): void {
    console.log(restraunt_id);
  }
}
