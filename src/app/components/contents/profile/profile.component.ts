import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  items: MenuItem[];

  constructor(){
    this.items = [
      {
        label:'Dasboard',
        routerLink:['dashboard']
      },
      {
          label: 'Food',
          items: [{
                  label: 'Food Category',
                  items: [
                      {label: 'Add Food Category', routerLink:['food/food-category/add']},
                      // {label: 'Update', icon: 'pi pi-fw pi-filter',routerLink:['food/food-category/update']},
                      {label: 'Food Category List', routerLink:['food/food-category/list']}
                  ]
              },
              {
                label: 'Food Details',
                items: [
                    {label: 'Add Food Details', routerLink:['food/food-details/add']},
                    // {label: 'Update', icon: 'pi pi-fw pi-filter',routerLink:['food/food-details/update']},
                    {label: 'Food Details List', routerLink:['food/food-details/list']}
                ]}
          ]
      },
      {
          label: 'Order',
          items: [
              {label: 'Order List',routerLink:['order/list']},
              // {label: 'Update', icon: 'pi pi-fw pi-refresh',routerLink:['order/update']}
          ]
      },
      {
          label: 'Report'
      },
      {
          label: 'Profile',
          routerLink:['profile']
      },
      {
        label: 'Logout',

      }
  ];
  }
  ngOnInit(): void {

  }
}
