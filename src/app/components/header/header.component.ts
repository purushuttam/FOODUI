import { Component } from '@angular/core';
import { AreaService } from 'src/app/services/Country/Area.service';
import { MenuItem } from 'primeng/api';
import { city } from 'src/app/models/comman/Country';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cities: city[] = [];

  selectedCity: any;
  city_code: any;
  constructor(private AreaService: AreaService,
    private router:Router) {
    // this.selectedCity = '';
    AreaService.GetAllAvailableCity('IN').subscribe({
      next: (response: any) => {
        this.cities = response;
        console.log(this.cities);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  onCityChange(event: any): void {
    console.log(event.value);
  }

  OnCityChange(city_code:any): void{
    console.log(city_code)
    this.router.navigate(['/list'],{queryParams:{city_code:this.selectedCity}})
  }
}
