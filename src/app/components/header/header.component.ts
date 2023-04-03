import { Component, OnInit, ViewChild } from '@angular/core';
import { AreaService } from 'src/app/services/Country/Area.service';
import { MenuItem } from 'primeng/api';
import { city } from 'src/app/models/comman/Country';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/Order/cart.service';
import { Response } from 'src/app/models/comman/comman.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { Menu } from 'primeng/menu';
import { ContextMenu } from 'primeng/contextmenu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  cities: city[] = [];
  cartItems: any;
  itemsCount: any;
  selectedCity: any;
  city_code: any;
  @ViewChild('menu') menu: any;
  constructor(
    private AreaService: AreaService,
    private router: Router,
    private cartService: CartService,
    private AuthService: AuthServiceService
  ) {

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
  showMenu(event: any) {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Open the menu at the position of the button
    this.menu.toggle(event);
  }
  onCityChange(event: any): void {
    console.log(event.value);
  }

  OnCityChange(city_code: any): void {
    console.log(city_code);
    this.router.navigate(['/list'], {
      queryParams: { city_code: this.selectedCity },
    });
  }
  items: MenuItem[] = [];
  ngOnInit(): void {
    if (this.AuthService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.items = [
      { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
        command: () => this.logout(),
      },
    ];
  }
  logout() {
    // perform logout logic
  }
  ConfirmLogout() {
    localStorage.clear();
    this.router.navigate(['admin/account/login']);
  }
}
