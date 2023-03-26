import { Component,OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/Country/Area.service';
import { MenuItem } from 'primeng/api';
import { city } from 'src/app/models/comman/Country';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/Order/cart.service';
import { Response } from 'src/app/models/comman/comman.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cities: city[] = [];
  cartItems:any;
  itemsCount:any;
  selectedCity: any;
  city_code: any;
  constructor(private AreaService: AreaService,
    private router:Router,
    private cartService:CartService) {
      
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

  ngOnInit(): void {

  }

}
